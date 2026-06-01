'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Loader2, AlertCircle } from 'lucide-react';

type Lang = 'es' | 'en' | 'fr' | 'ca';

/** Endpoint de envío del Google Form existente (las respuestas siguen llegando a la hoja). */
const FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSdCwfeIbzLGgn9ZOOS_VjvfMQukSazdarJJvKj1J9lqUssISw/formResponse';

/** entry.ID de cada campo del Google Form. */
const FIELD = {
  name: 'entry.2005620554',
  email: 'entry.1045781291',
  phone: 'entry.1166974658',
  needs: 'entry.878042581',
  comments: 'entry.839337160',
  antispam: 'entry.1753730341',
} as const;

/** Los valores de los checkboxes deben coincidir EXACTAMENTE con las opciones del Google Form (en español). */
const NEED_VALUES = {
  reservar: 'Quiero reservar un barco',
  pregunta: 'Tengo una pregunta',
  excursion: 'Excursión privada',
  otra: 'Otra consulta',
} as const;
type NeedKey = keyof typeof NEED_VALUES;

type Copy = {
  redirect: string;
  name: string;
  email: string;
  phone: string;
  phoneOptional: string;
  needs: string;
  needsOptions: Record<NeedKey, string>;
  comments: string;
  commentsOptional: string;
  antispam: string;
  antispamError: string;
  required: string;
  invalidEmail: string;
  submit: string;
  submitting: string;
  genericError: string;
};

const COPY: Record<Lang, Copy> = {
  es: {
    redirect: '/gracias',
    name: 'Nombre',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    phoneOptional: 'opcional',
    needs: '¿Qué necesitas?',
    needsOptions: {
      reservar: 'Quiero reservar un barco',
      pregunta: 'Tengo una pregunta',
      excursion: 'Excursión privada',
      otra: 'Otra consulta',
    },
    comments: 'Comentarios',
    commentsOptional: 'opcional',
    antispam: '¿Cuánto es 3 + 7?',
    antispamError: 'La respuesta no es correcta.',
    required: 'Este campo es obligatorio.',
    invalidEmail: 'Introduce un correo electrónico válido.',
    submit: 'Enviar mensaje',
    submitting: 'Enviando…',
    genericError: 'No se ha podido enviar. Inténtalo de nuevo o escríbenos por WhatsApp.',
  },
  en: {
    redirect: '/en/thank-you',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    phoneOptional: 'optional',
    needs: 'What do you need?',
    needsOptions: {
      reservar: 'I want to book a boat',
      pregunta: 'I have a question',
      excursion: 'Private excursion',
      otra: 'Other enquiry',
    },
    comments: 'Comments',
    commentsOptional: 'optional',
    antispam: 'What is 3 + 7?',
    antispamError: 'That answer is not correct.',
    required: 'This field is required.',
    invalidEmail: 'Please enter a valid email address.',
    submit: 'Send message',
    submitting: 'Sending…',
    genericError: 'We couldn’t send your message. Please try again or message us on WhatsApp.',
  },
  fr: {
    redirect: '/fr/merci',
    name: 'Nom',
    email: 'E-mail',
    phone: 'Téléphone',
    phoneOptional: 'facultatif',
    needs: 'De quoi avez-vous besoin ?',
    needsOptions: {
      reservar: 'Je veux réserver un bateau',
      pregunta: 'J’ai une question',
      excursion: 'Excursion privée',
      otra: 'Autre demande',
    },
    comments: 'Commentaires',
    commentsOptional: 'facultatif',
    antispam: 'Combien font 3 + 7 ?',
    antispamError: 'La réponse n’est pas correcte.',
    required: 'Ce champ est obligatoire.',
    invalidEmail: 'Veuillez saisir une adresse e-mail valide.',
    submit: 'Envoyer le message',
    submitting: 'Envoi…',
    genericError: 'L’envoi a échoué. Réessayez ou écrivez-nous sur WhatsApp.',
  },
  ca: {
    redirect: '/ca/gracies',
    name: 'Nom',
    email: 'Correu electrònic',
    phone: 'Telèfon',
    phoneOptional: 'opcional',
    needs: 'Què necessiteu?',
    needsOptions: {
      reservar: 'Vull reservar un vaixell',
      pregunta: 'Tinc una pregunta',
      excursion: 'Excursió privada',
      otra: 'Altra consulta',
    },
    comments: 'Comentaris',
    commentsOptional: 'opcional',
    antispam: 'Quant és 3 + 7?',
    antispamError: 'La resposta no és correcta.',
    required: 'Aquest camp és obligatori.',
    invalidEmail: 'Introduïu un correu electrònic vàlid.',
    submit: 'Envia el missatge',
    submitting: 'Enviant…',
    genericError: 'No s’ha pogut enviar. Torneu-ho a provar o escriviu-nos per WhatsApp.',
  },
};

const NEED_KEYS: NeedKey[] = ['reservar', 'pregunta', 'excursion', 'otra'];

const inputBase =
  'w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-gray-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 placeholder:text-gray-400';

export default function ContactForm({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const router = useRouter();

  const [needs, setNeeds] = useState<Set<NeedKey>>(new Set());
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
  const [error, setError] = useState<string | null>(null);

  function toggleNeed(key: NeedKey) {
    setNeeds((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;
    setError(null);

    const fd = new FormData(e.currentTarget);

    // Honeypot anti-bot: campo oculto que un humano nunca rellena.
    if ((fd.get('company') as string)?.trim()) {
      router.push(t.redirect); // simula éxito sin enviar
      return;
    }

    const name = (fd.get('name') as string)?.trim() ?? '';
    const email = (fd.get('email') as string)?.trim() ?? '';
    const phone = (fd.get('phone') as string)?.trim() ?? '';
    const comments = (fd.get('comments') as string)?.trim() ?? '';
    const antispam = (fd.get('antispam') as string)?.trim() ?? '';

    if (!name || !email) {
      setError(t.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.invalidEmail);
      return;
    }
    if (Number(antispam) !== 10) {
      setError(t.antispamError);
      return;
    }

    const body = new URLSearchParams();
    body.append(FIELD.name, name);
    body.append(FIELD.email, email);
    if (phone) body.append(FIELD.phone, phone);
    needs.forEach((k) => body.append(FIELD.needs, NEED_VALUES[k]));
    if (comments) body.append(FIELD.comments, comments);
    body.append(FIELD.antispam, antispam);

    setStatus('submitting');
    try {
      // Google Forms no envía cabeceras CORS: usamos no-cors (respuesta opaca pero el envío se registra).
      await fetch(FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      router.push(t.redirect);
    } catch {
      setStatus('idle');
      setError(t.genericError);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot: oculto a usuarios, visible a bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.name} <span className="text-red-500">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputBase} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.phone} <span className="text-gray-400 font-normal">({t.phoneOptional})</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputBase} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t.email} <span className="text-red-500">*</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputBase} />
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 mb-2">{t.needs}</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {NEED_KEYS.map((key) => (
            <label
              key={key}
              className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 cursor-pointer transition hover:border-sky-300 has-[:checked]:border-sky-500 has-[:checked]:bg-sky-50"
            >
              <input
                type="checkbox"
                checked={needs.has(key)}
                onChange={() => toggleNeed(key)}
                className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <span className="text-sm text-gray-700">{t.needsOptions[key]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t.comments} <span className="text-gray-400 font-normal">({t.commentsOptional})</span>
        </label>
        <textarea id="comments" name="comments" rows={4} className={inputBase} />
      </div>

      <div>
        <label htmlFor="antispam" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t.antispam} <span className="text-red-500">*</span>
        </label>
        <input
          id="antispam"
          name="antispam"
          type="text"
          inputMode="numeric"
          required
          autoComplete="off"
          className={`${inputBase} max-w-[10rem]`}
        />
      </div>

      {error && (
        <p className="flex items-center gap-2 text-sm text-red-600" role="alert">
          <AlertCircle className="w-4 h-4 shrink-0" aria-hidden />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
            {t.submitting}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" aria-hidden />
            {t.submit}
          </>
        )}
      </button>
    </form>
  );
}

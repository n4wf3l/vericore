import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, Mail, Upload, X } from 'lucide-react';
import RecruitmentInfoPanel from '../RecruitmentInfoPanel';

interface RecruitmentFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  availability: string;
  experience: string;
  message: string;
}

const RecruitmentForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<RecruitmentFormData>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const position = watch('position');

  const onSubmit = (data: RecruitmentFormData) => {
    console.log('Recruitment Form Data:', data);
    console.log('CV File:', selectedFile);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      setSelectedFile(null);
    }, 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const mailtoLink = `mailto:vericoresrl@gmail.com?subject=Candidature - ${position || 'Spontanée'}&body=Bonjour,%0D%0A%0D%0AJe souhaite postuler pour...`;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-300 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Candidature envoyée !</h3>
        <p className="text-green-700">Nous étudierons votre profil et vous recontacterons rapidement.</p>
      </motion.div>
    );
  }

  return (
    <div>
      <RecruitmentInfoPanel />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="rec-name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nom & Prénom <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name', { required: 'Ce champ est obligatoire' })}
            id="rec-name"
            type="text"
            placeholder="Jean Dupont"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="rec-email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email', {
                required: 'Ce champ est obligatoire',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email invalide'
                }
              })}
              id="rec-email"
              type="email"
              placeholder="jean@exemple.be"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="rec-phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              {...register('phone', { required: 'Ce champ est obligatoire' })}
              id="rec-phone"
              type="tel"
              placeholder="+32 123 456 789"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Position & Availability */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="rec-position" className="block text-sm font-semibold text-gray-700 mb-2">
              Poste / Domaine <span className="text-red-500">*</span>
            </label>
            <select
              {...register('position', { required: 'Veuillez sélectionner un poste' })}
              id="rec-position"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
            >
              <option value="">Sélectionner...</option>
              <option value="technicien-polyvalent">Technicien polyvalent</option>
              <option value="electricien">Électricien</option>
              <option value="plombier">Plombier / Sanitaire</option>
              <option value="hvac">HVAC / Ventilation</option>
              <option value="peintre">Peintre / Finitions</option>
              <option value="chef-equipe">Chef d'équipe</option>
              <option value="spontanee">Candidature spontanée</option>
            </select>
            {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
          </div>

          <div>
            <label htmlFor="rec-availability" className="block text-sm font-semibold text-gray-700 mb-2">
              Disponibilité <span className="text-red-500">*</span>
            </label>
            <select
              {...register('availability', { required: 'Veuillez sélectionner une disponibilité' })}
              id="rec-availability"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
            >
              <option value="">Sélectionner...</option>
              <option value="immediate">Immédiate</option>
              <option value="2-weeks">2 semaines</option>
              <option value="1-month">1 mois</option>
              <option value="other">Autre</option>
            </select>
            {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability.message}</p>}
          </div>
        </div>

        {/* Experience */}
        <div>
          <label htmlFor="rec-experience" className="block text-sm font-semibold text-gray-700 mb-2">
            Années d'expérience <span className="text-red-500">*</span>
          </label>
          <select
            {...register('experience', { required: 'Veuillez sélectionner votre expérience' })}
            id="rec-experience"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
          >
            <option value="">Sélectionner...</option>
            <option value="0-2">0–2 ans</option>
            <option value="3-5">3–5 ans</option>
            <option value="6-10">6–10 ans</option>
            <option value="10+">10+ ans</option>
          </select>
          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
        </div>

        {/* CV Upload */}
        <div>
          <label htmlFor="rec-cv" className="block text-sm font-semibold text-gray-700 mb-2">
            CV (optionnel)
          </label>
          {!selectedFile ? (
            <label
              htmlFor="rec-cv"
              className="w-full flex items-center justify-center gap-2 px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition-all cursor-pointer"
            >
              <Upload className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">Cliquez pour télécharger votre CV</span>
              <input
                id="rec-cv"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          ) : (
            <div className="flex items-center justify-between px-4 py-3 border-2 border-primary-300 bg-primary-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">{selectedFile.name}</span>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="p-1 hover:bg-red-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-red-600" />
              </button>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-1">Format accepté : PDF, DOC, DOCX</p>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="rec-message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message / Présentation <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message', { required: 'Ce champ est obligatoire' })}
            id="rec-message"
            rows={5}
            placeholder="Présentez votre parcours, vos compétences et votre motivation..."
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Envoyer la candidature
          </motion.button>

          <a
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full border-2 border-primary-600 text-primary-600 px-6 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Envoyer par email
            </motion.button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default RecruitmentForm;

import * as Yup from 'yup';
import RHFTextField from '@/base/form/input/RHFTextField';
import FormProvider from '@/base/form/provider/FormProvider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import RHFSubmitButton from '@/base/form/input/RHFSubmitButton';
import FormLayout from '@/base/form/layout/FormLayout';
import { FormLayoutRow, RHFBooleanField } from '@/base/form';
import React from 'react';
import {m} from "framer-motion";
import axios from "axios";

// ----------------------------------------------------------------------

export default function NewsletterForm( ) {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("L'email doit être valide.")
        .required("L'email est requis."),
    consent: Yup.boolean()
        .oneOf(
            [true],
            "Coche cette case pour t'inscrire à la newsletter."
        )
        .required(),
  });

  const defaultValues = {
    email: '',
    consent: false,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = async data => {
    try {
      const res = await axios.post('/api/sendinblue', {
        email: data.email,
      });

      if (res.status === 200) {
        toast.success("Tu es déja inscrit à la newsletter !");
      }

        if (res.status === 201) {
            toast.success("C'est bon ! Tu es inscrit à la newsletter.");
        }

        if (res.status === 500) {
            toast.error("Une erreur est survenue.");
        }
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  return (
      <>
        {/* Form */}
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full place-content-between gap-2">
            <div className="w-full  py-8 ">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-8 sm:gap-4">

                  {/* Input & AdminButton */}
                  <RHFTextField
                      name="email"
                      label=""
                      placeholder="Entrez votre mail"
                      theme={'dark'}
                  />

                  <RHFSubmitButton title="Je m'inscris" theme={'dark'} />
                </div>
                <RHFBooleanField
                    theme={'dark'}
                    name="consent"
                    label="J'accepte sans réserve la politique de confidentialité de la newsletter."
                    type="checkbox"
                    destination="/legal/politique-de-confidentialite"
                    link="Voir la politique de confidentialité"
                    defaultValue={defaultValues.consent}
                />
              </div>
            </div>
          </div>
        </FormProvider>
      </>
  );
}

import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import {z} from 'zod'
import { Control,FieldPath } from 'react-hook-form';
import { formSchema } from '@/lib/utils';

const schema = formSchema("signup")

interface CustomInput  {
    control: Control<z.infer <typeof schema>>;
    name: FieldPath<z.infer <typeof schema>>;
    label: string;
    placeholder: string;
}

const CustomInput = ({control ,name,label, placeholder }: CustomInput) => {

  return (
    <>
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
                      <div className='form-item'>
                        <FormLabel className='form-label'>{label}</FormLabel>
                        <div className='flex w-full flex-col'>
                          <FormControl>
                            <Input placeholder={placeholder} className='input-class'  type={name === 'password' ? 'password' : 'text'} {...field}/>
                          </FormControl>
                          <FormMessage className='form-message mt-2'/>

                        </div>

                      </div>
            
                    )}
                  />
    </>
  )
}

export default CustomInput
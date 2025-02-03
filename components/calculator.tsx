'use client'

import { useEffect, useState } from 'react'
import { Datepicker } from 'flowbite-react'
import Cookies from 'js-cookie'
import moment from 'moment'

export default function Calculator() {
  const bdayCookie = Cookies.get('bdayCookie')
  const [birthdate, setBirthdate] = useState<Date | null>(
    bdayCookie ? new Date(bdayCookie) : new Date()
  )
  const [age, setAge] = useState<number | null>(null)

  useEffect(() => {
    if (birthdate) {
      Cookies.set('bdayCookie', birthdate.toISOString(), {
        path: '/', // Available across the entire site
        sameSite: 'strict', // Provides some protection against CSRF
      })
    }
  }, [birthdate])

  useEffect(() => {
    if (birthdate) {
      setAge(calculate_age(birthdate) || null)
    }
  }, [birthdate])

  const calculate_age = (dob: any) => {
    const birthDate = moment(new Date(dob))
    const today = moment(Date.now())
    const age = today.diff(birthDate, 'months')
    if (age > 0) {
      return age
    } else {
      return null
    }
  }
  return (
    <>
      <div className='max-w-4xl grid grid-cols-2 mx-auto gap-4'>
        <div>
          <label htmlFor='birthdate' className='block mb-5'>
            My baby's birthdate:
          </label>
          <Datepicker
            value={birthdate}
            onChange={(date) => setBirthdate(date)}
          />
        </div>
        {bdayCookie && age !== null ? (
          <div className='flex justify-center'>Baby is {age} months old</div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

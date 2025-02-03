'use client'

import { useEffect, useState } from 'react'
import { Datepicker, Dropdown, Select } from 'flowbite-react'
import Cookies from 'js-cookie'
import moment from 'moment'

export default function Calculator() {
  const bdayCookie = Cookies.get('bdayCookie')
  const genderCookie = Cookies.get('genderCookie')
  const [birthdate, setBirthdate] = useState<Date | null>(
    bdayCookie ? new Date(bdayCookie) : new Date()
  )
  const [gender, setGender] = useState(genderCookie ? genderCookie : 'neutral')

  const [age, setAge] = useState<number | null>(null)

  useEffect(() => {
    if (birthdate) {
      Cookies.set('bdayCookie', birthdate.toISOString(), {
        path: '/',
        sameSite: 'strict',
      })
    }
  }, [birthdate])

  useEffect(() => {
    if (gender) {
      Cookies.set('genderCookie', gender, {
        path: '/',
        sameSite: 'strict',
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
  console.log(gender, 'gender?')
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
        <div>
          {bdayCookie && age !== null ? (
            <div className='flex justify-center'>Baby is {age} months old</div>
          ) : (
            ''
          )}
        </div>
        <div>
          <label htmlFor='gender' className='block mb-5'>
            Baby is a
          </label>
          <Dropdown
            label='Gender'
            value={gender}
            onChange={() => setGender(gender)}>
            <Dropdown.Item onClick={() => setGender('male')}>Boy</Dropdown.Item>
            <Dropdown.Item onClick={() => setGender('female')}>
              Girl
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setGender('neutral')}>
              Prefer not to say
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          {bdayCookie && age !== null ? (
            <div className='flex justify-center'>Baby is a {gender} </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

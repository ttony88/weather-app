import { useEffect, useState } from 'react'
import styles from './CurrentDateAndTime.module.css'

const CurrentDateAndTime = () => {

    const [minutes, setMinutes] = useState()

    const [hours, setHours] = useState()

    const [year, setYear] = useState()

    const [dayOfMonth, setDayOfMonth] = useState()

    const [dayWeek, setDayWeek] = useState()

    const [month, setMonth] = useState()

    useEffect(() => {

        const intervalMinutes = setInterval(() => setMinutes(new Date().getMinutes()), 1000)
        return () => {
            clearInterval(intervalMinutes);
        }

    }, [minutes])

    useEffect(() => {

        const intervalHours = setInterval(() => setHours(new Date().getHours()), 1000)
        return () => {
            clearInterval(intervalHours);
        }
        
    }, [hours])

    useEffect(() => {

        const IntervalYear = setInterval(() => setYear(new Date().getFullYear()), 1000)
        return () => {
            clearInterval(IntervalYear)
        }
    }, [year])

    useEffect(() => {

        const intervalDayOfMonth = setInterval(() => setDayOfMonth(new Date().getDate()), 1000)
        return () => {
            clearInterval(intervalDayOfMonth);
        }

    }, [dayOfMonth])

    useEffect(() => {

        const intervalDayWeek = setInterval(() => setDayWeek(new Date().getDay()), 1000)
        return () => {
            clearInterval(intervalDayWeek);
        }

    }, [dayWeek])

    useEffect(() => {

        const intervalMonth = setInterval(() => setMonth(new Date().getMonth()), 1000)
        return () => {
            clearInterval(intervalMonth);
        }
 
    }, [month])
        
    const getCurrentDayWeek = (ordinalNumberDayWeek) =>  {

        const listDaysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                             'Thursday', 'Friday', 'Saturday']
        const currentDayWeek =  listDaysWeek[ordinalNumberDayWeek]
        
        if(currentDayWeek) return currentDayWeek
        return ''
    }

    const getCurrentDayOfMonth = (dayOfMonth) => {

        if (dayOfMonth) return dayOfMonth
        return '' 
    }

    const getCurrentMonth = (ordinalNumberDayMonth) => {

        const listMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                          'August', 'September', 'October', 'November', 'December']
        const currentMonth = listMonth[ordinalNumberDayMonth]
        
        if(currentMonth) return currentMonth
        return '' 
    }
    
    const getCurrentYear = (year) => {

        if(year) return year
        return '' 
    }

    const getCurrentTime = (hours, minutes) => {

        const currentMinutes = makeATwoDigitNumber(minutes)

        const currentHours = makeATwoDigitNumber(hours)

        if (currentHours && currentMinutes) return `${currentHours}:${currentMinutes}`
        return ''
    }

    const makeATwoDigitNumber = (number) => {

        if(number < 10) return `0${number}`
        return number
    }

    return(
        <div className={styles.dateAndTime}>
            {`${getCurrentDayWeek(dayWeek)}, ${getCurrentDayOfMonth(dayOfMonth)} 
            ${getCurrentMonth(month)} ${getCurrentYear(year)} 
            | ${getCurrentTime(hours, minutes)}`}
        </div>
    )
}

export default CurrentDateAndTime
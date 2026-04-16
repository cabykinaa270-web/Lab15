import { Routes, Route } from 'react-router-dom';
import './style.css';

function News(){
    return(
        <p><h1>News</h1>
        <h3>Ежегодно 8 июня отмечается Всемирный день океанов. В 2026 году в рамках этого события в разных странах проходят просветительские мероприятия, конференции, выставки, акции по очистке побережий и другие мероприятия, направленные на привлечение внимания к проблемам океана и его защите.</h3>
        </p>
    )
}

function About(){
    return(
        <h1>Южный Федеральный Университет</h1>
    )
}

function Contacts(){
    return(
        <h2>8 (952) 607-37-22</h2>
    )
}

export function Main(){
    return (
    <div class="main">
        <div class="main_container">
            <section class="flex-center"><img src="https://i.pinimg.com/originals/a6/ea/55/a6ea554724bcc7d31216d32c5b736203.jpg?nii=t" width={250} alt='ocean' /></section>
            <article class="flex-center">
                <Routes>
                    <Route path='/news' element={<News />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='*' element={<h3>Неправильная ссылка</h3>} />
                </Routes>
            </article>
            <aside class="flex-center"> Чабыкина Арина Александровна</aside>
        </div>
    </div>
    )
}

export default Main;
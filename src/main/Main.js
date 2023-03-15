import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Photo from '../assets/image/photo_2023-03-14_15-25-55.jpg'


function Main() {

    const imPhoto = {
        backgroundImage: `url(${Photo})`,
    }

    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <span>I am  Ilya<span>Kashalevich</span></span>
                    <h1> Frontend Developer.</h1>
                </div>
                <div className={style.photo} >
                    <div className={style.image}></div>
                </div>
            </div>

        </div>
    );
}

export default Main;

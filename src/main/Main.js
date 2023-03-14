import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Photo from '../assets/image/photo_2023-03-14_15-25-55.jpg'


function Main() {

    const imPhoto = {
        backgroundImage: `url(${Photo})`,
    }

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Kashalevich Ilya</h1>
                    <p> Frontend Developer.</p>
                </div>
                <div className={style.photo} style={imPhoto}></div>
            </div>

        </div>
    );
}

export default Main;

import style from './ReasonsToJoin.module.css'
import tvIcon from '/tv.png';
import downloadIcon from '/download.png';
import watchIcon from '/watch.png';
import kidsIcon from '/kids.png';


export function ReasonsToJoin () {
    return (
        <div className={style.container}>
            <h2>More Reasons to Join</h2>
            <div className={style.row}>
                <div className={style.card}>
                    <h3>Enjoy on your TV</h3>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    <img className={style.img} src={tvIcon} alt="tv" />
                </div>
                <div className={style.card}>
                    <h3>Download your shows to watch offline</h3>
                    <p>Save your favorites easily and always have something to watch.</p>
                    <img className={style.img} src={downloadIcon} alt="download" />
                    
                </div>
                <div className={style.card}>
                    <h3>Watch everywhere</h3>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    <img className={style.img} src={watchIcon} alt="watch" />
                </div>
                <div className={style.card}>
                    <h3>Create profiles for kids</h3>
                    <p>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                    <img className={style.img} src={kidsIcon} alt="kids" />
                </div>
            </div>
        </div>
    )
}
export default ReasonsToJoin;
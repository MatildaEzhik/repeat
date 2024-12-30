import style from './style.module.css'
export const MyHeader = ({title}) => {
    let listP=[
      "asd",
      "asd",
      "asd",
      "asd",
    ]
    return (
        <header className={style.header}>
            <h1>{title}</h1>
            {listP.map((T)=>{
                return <p>{T}</p>
            })}
        </header>
    )
    
}
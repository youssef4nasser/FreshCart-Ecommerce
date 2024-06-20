import style from './Loading.module.css'

function Loading() {
  return (
    <div className='position-fixed w-100 h-100 bg-dark-subtle top-0 end-0 d-flex justify-content-center align-items-center z-3'>
        <span className={style.loader}></span>
    </div>
  )
}

export default Loading
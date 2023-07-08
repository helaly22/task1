function Card ({text1,text2,text3,logo}){
    return(
        <>
        <img src={logo} width={'150px'} alt="" />
        <h3>{text2}</h3>
        <h5>{text3}</h5>
        </>
    )

}
export default Card
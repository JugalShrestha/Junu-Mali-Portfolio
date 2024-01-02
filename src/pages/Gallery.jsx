import arts from "../components/arts"
import Art from "../components/Art"

const Gallery = () => {

  return (
    <div className="page" id="gallery-page">
      <div className="gallery">
          <div className="arts">
            {arts.map((art,index)=>{
              return <Art photo={art.photo} key={index} id={art.id}/>
            })}
          </div>
      </div>
    </div>
  )
}

export default Gallery
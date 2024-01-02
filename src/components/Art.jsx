import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

const Art = ({photo,id}) => {
  const fromBottomVairants = {
    initial:{
        y: 100,
        opacity: 0,
    },
    animation:{
        y: 0,
        opacity: 1,
    }
}
  return (
    <motion.div transition={{delay: 0.1,type: "spring",}} viewport={{ once: true }} className='art' variants={fromBottomVairants} initial="initial" whileInView="animation">
    <Link to={"/art?query="+id} className="art">
          <img src={photo} alt={id} />
    </Link>
    </motion.div>
  )
}

Art.propTypes = {
  photo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Art
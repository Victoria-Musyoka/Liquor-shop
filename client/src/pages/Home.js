import React from 'react'

import LiquorItem from '../components/LiquorItem'
import NewLiquorForm from '../components/NewLiquorForm'
// import StarRating from '../components/StarRating'



const Home = ({handleAddLiquor,handleDeleteLiquor,handleUpdateLiquor,liquor}) => {
  return (
    <div>
     
        <main>
        <NewLiquorForm onAddLiquor={handleAddLiquor} />
          <section className="liquor-list"> 
          {liquor.map((liquor) => (
            <LiquorItem
              key={liquor.id}
              liquor={liquor}
              onUpdateLiquor={handleUpdateLiquor}
              onDeleteLiquor={handleDeleteLiquor}
            /> 
          ))}
        </section>
      </main>

    </div>
  )
}

export default Home

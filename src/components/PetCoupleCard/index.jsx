import './styles.css'
import {petImages} from '../../assets/images/pets'

export function PetCoupleCard({ pet1, pet2 }) {
  if (!pet1 || !pet2) return null

  return (
    <article className="pet-couple">
      <div className="pet-couple-photos">
        <img className="pet-photo" src={pet1.image} alt={pet1.name} />
        <img className="pet-photo" src={pet2.image} alt={pet2.name} />

        <img
          className="pet-heart"
          src={petImages.coracao}
          alt=""
          aria-hidden="true"
        />
      </div>

      <p className="pet-couple-name">{pet1.name} e {pet2.name}</p>
    </article>
  )
}

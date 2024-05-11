import { faCartPlus, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Image, Table } from "react-bootstrap"
import Product1 from "../../assets/Product1.jpeg"
import Product2 from "../../assets/Product2.jpeg"
import Product3 from "../../assets/Product3.jpeg"

function AccountWishlist() {
  return <>
    <div className="">
        <Table hover >
            <thead>
                <tr  className="bg-info text-center">
                <th>Imgae</th>
                <th>Name</th>
                <th>Price</th>
                <th>Add to cart</th>
                <th>Remove</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr>
                    <td>
                        <Image src={Product2} alt="Wishlist" width={90}   />
                    </td>
                    <td className="py-5">
                        <span>Product Name a2</span>
                    </td>
                    <td className="py-5">299$</td>
                    <td className="py-5"><FontAwesomeIcon className="cursor-pointer" icon={faCartPlus} size="lg" /></td>
                    <td className="py-5"><FontAwesomeIcon className="cursor-pointer"  icon={faXmark} size="lg" /></td>
                </tr>
                <tr>
                    <td>
                        <Image src={Product1} alt="Wishlist" width={90}   />
                    </td>
                    <td className="py-5">
                        <span>Product Name a1</span>
                    </td>
                    <td className="py-5">199$</td>
                    <td className="py-5"><FontAwesomeIcon className="cursor-pointer" icon={faCartPlus} size="lg" /></td>
                    <td className="py-5"><FontAwesomeIcon className="cursor-pointer"  icon={faXmark} size="lg" /></td>
                </tr>
                <tr>
                    <td>
                        <Image src={Product3} alt="Wishlist" width={90}   />
                    </td>
                    <td className="py-5">
                        <span>Product Name a3</span>
                    </td>
                    <td className="py-5">399$</td>
                    <td className="py-5"><FontAwesomeIcon className="cursor-pointer" icon={faCartPlus} size="lg" /></td>
                    <td className="py-5"><FontAwesomeIcon className="cursor-pointer"  icon={faXmark} size="lg" /></td>
                </tr>
                <tr>
                    <td>
                        <Image src={Product2} alt="Wishlist" width={90}   />
                    </td>
                    <td className="py-5">
                        <span>Product Name a2</span>
                    </td>
                    <td className="py-5">299$</td>
                    <td className="py-5"><FontAwesomeIcon className="cursor-pointer" icon={faCartPlus} size="lg" /></td>
                    <td className="py-5"><FontAwesomeIcon className="cursor-pointer"  icon={faXmark} size="lg" /></td>
                </tr>
            </tbody>
        </Table>
    </div>
  </>
}

export default AccountWishlist
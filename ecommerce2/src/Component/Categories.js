import React, { useEffect, useState } from "react";
import "./Style/CategoryStyle.css";
import { Link } from "react-router-dom";
import CategoryProducts from "./CategoryProducts";

const scrollToProducts = () => {
  const productsSection = document.getElementById("products");
  productsSection.scrollIntoView({ behavior: "smooth" });
};

function Categories() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");

  const api_Url = "https://fakestoreapi.com/products";

  const catImgaes = {
    img1: "https://s.yimg.com/uu/api/res/1.2/r59QHlsa_l1FsxxsVl7.6w--~B/aD0xMjYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/7e16cd50-33ee-11ed-bd7f-45b4dd0372d0.cf.jpg",
    img2: "https://media2.bulgari.com/image/upload/f_auto,q_auto/v1674465935/serpenti-75/collection/J-23_Serpenti75_Product05_435x543_jnwhbd.jpg",
    img3: "https://i.pinimg.com/236x/e7/93/b1/e793b1dd2274a2937ee9cdebaf60e35a.jpg",
    img4: "https://cdn.cliqueinc.com/posts/293912/summer-outfits-for-women-293912-1687532705560-main.700x0c.jpg",
  };
  const setCategoriesImages = (catName) => {
    if (catName === "electronics") return catImgaes.img1;
    if (catName === "jewelery") return catImgaes.img2;
    if (catName === "men's clothing") return catImgaes.img3;
    if (catName === "women's clothing") return catImgaes.img4;
  };

  useEffect(() => {
    fetch(`${api_Url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const getProductsOfCat = (catName) => {
    console.log(catName);
    fetch(`${api_Url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  return (
    <>
      <div className="photo-gallery">
        {categories.map((cat) => {
          return (
            <div key={cat}>
              <Link
                onClick={() => {
                  getProductsOfCat(cat);
                  setTitle(cat);
                  scrollToProducts();
                }}
              >
                <img src={setCategoriesImages(cat)} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
      <CategoryProducts items={products} title={title} />
    </>
  );
}

export default Categories;

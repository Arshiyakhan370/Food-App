import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchSliceAction } from '../store/SearchSlice';
import classes from './mainPage/menu.module.css';
import { cartAction } from '../store/CartSlice';
import {
  KetoCakes,
  KetoCupcakes,
  ReadyToCook,
  SugarFreeDesserts,
  ketoBurger,
  ketoMains,
  ketoPasta,
  ketoPizza,
  ketoSides,
  menuPage,
  menuPage1,
  menuPage2,
  soupPage,
} from './mainPage/Menu';
import { AboutData } from './mainPage/About';
import { ContactData } from './mainPage/Contact';

const MagnifyGlass = () => {
  const [inputValue, setInputValue] = useState(null);
  const [searchedVal, setsearchedVal] = useState(null);
  const dispatch = useDispatch();
  const isSearch = useSelector((state) => state.isSearch);

  const globalData = [
    ...menuPage,
    ...menuPage1,
    ...menuPage2,
    ...ketoPizza,
    ...soupPage,
    ...ketoBurger,
    ...ketoPasta,
    ...ketoMains,
    ...ketoSides,
    ...SugarFreeDesserts,
    ...KetoCupcakes,
    ...ReadyToCook,
    ...KetoCakes,
    ...AboutData,
    ...ContactData,
  ];

  useEffect(() => {
    if (inputValue) {
      dispatch(SearchSliceAction.setSearch());
      dispatch(SearchSliceAction.setsearchValue(inputValue));
    } else {
      dispatch(SearchSliceAction.setSearch());
    }
  }, [inputValue]);

  useEffect(() => {
    let id = setTimeout(() => {
      setsearchedVal(inputValue);
    }, 500);
    return () => clearTimeout(id);
  }, [inputValue]);

  const menuPageFiltered = globalData.filter(
    (item) =>
      item.title?.toLocaleLowerCase().includes(searchedVal?.toLocaleLowerCase().trim()) ||
      item.description?.toLocaleLowerCase().includes(searchedVal?.toLocaleLowerCase().trim())
  );

  return (
    <Fragment>
      <form
        className="form-inline my-2 my-lg-0"
        style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', width: '100%' }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div style={{ width: '30%', display: 'flex', marginTop: '30px', justifyContent: 'space-between' }}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ outline: 'none' }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn btn-outline-success mx-2 my-2 my-sm-0" type="button">
            Search
          </button>
        </div>
      </form>
      <div className={classes.verticalBox}>
        {inputValue &&
          menuPageFiltered.map((data) => (
            <Fragment key={data.id}>
              {data.type === 'about' ? (
                <Link
                  to="/faq"
                  style={{ textDecoration: 'none' }}
                >
                  <div className={`${classes.box}`}>
                    <div className={classes.card}>
                      <div className={classes.horizontalLayout}>
                        <div className={classes.textSide}>
                          <h6>{data.title}</h6>
                          <p>{data.description}</p>
                          <span className="review-rating">★★★★★(4)</span>
                          <div>${data.price}</div>
                          <button
                            type="button"
                            className={classes.btn}
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              dispatch(
                                cartAction.addToCartItem({
                                  id: data.id,
                                  imgUrl: data.img,
                                  title: data.title,
                                  price: data.price,
                                  quantity: 1,
                                })
                              );
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className={classes.imageSide}>
                          <img src={data.img} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : data.type === 'menu' ? (
                <Link
                  to="/menu"
                  style={{ textDecoration: 'none' }}
                >
                  <div className={`${classes.box}`}>
                    <div className={classes.card}>
                      <div className={classes.horizontalLayout}>
                        <div className={classes.textSide}>
                          <h6>{data.title}</h6>
                          <p>{data.description}</p>
                          <span className="review-rating">★★★★★(4)</span>
                          <div>${data.price}</div>
                          <button
                            type="button"
                            className={classes.btn}
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              dispatch(
                                cartAction.addToCartItem({
                                  id: data.id,
                                  imgUrl: data.img,
                                  title: data.title,
                                  price: data.price,
                                  quantity: 1,
                                })
                              );
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className={classes.imageSide}>
                          <img src={data.img} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : data.type === 'special' ? (
                <Link
                  to="/contact"
                  style={{ textDecoration: 'none' }}
                >
                  <div className={`${classes.box}`}>
                    <div className={classes.card}>
                      <div className={classes.horizontalLayout}>
                        <div className={classes.textSide}>
                          <h6>{data.title}</h6>
                          <p>{data.description}</p>
                          <span className="review-rating">★★★★★(4)</span>
                          <div>${data.price}</div>
                          <button
                            type="button"
                            className={classes.btn}
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              dispatch(
                                cartAction.addToCartItem({
                                  id: data.id,
                                  imgUrl: data.img,
                                  title: data.title,
                                  price: data.price,
                                  quantity: 1,
                                })
                              );
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className={classes.imageSide}>
                          <img src={data.img} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link
                  to="/about"
                  style={{ textDecoration: 'none' }}
                >
                  <div className={`${classes.box}`}>
                    <div className={classes.card}>
                      <div className={classes.horizontalLayout}>
                        <div className={classes.textSide}>
                          <h6>{data.title}</h6>
                          <p>{data.description}</p>
                          <span className="review-rating">★★★★★(4)</span>
                          <div>${data.price}</div>
                          <button
                            type="button"
                            className={classes.btn}
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              dispatch(
                                cartAction.addToCartItem({
                                  id: data.id,
                                  imgUrl: data.img,
                                  title: data.title,
                                  price: data.price,
                                  quantity: 1,
                                })
                              );
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className={classes.imageSide}>
                          <img src={data.img} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </Fragment>
          ))}
        {inputValue && menuPageFiltered.length === 0 && (
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <h2>Product Not Found</h2>
                <p>We're sorry, the product you are looking for does not exist.</p>
                <p>
                  <Link to="/menu" className="btn btn-primary">
                    Go Back to Homepage
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default MagnifyGlass;

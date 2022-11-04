/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import css from "../../styles/pages/main-page";
import Button from "../comps/button/Button.jsx";
import SelectAkk from "../../services/selectAkk.service";
import CardPreview from "../views/CardPreview";
import CategoryCard from "../views/CategoryCard";
import RequestComponent from "../../services/request.service";
import { useSelector } from "react-redux";
import creta from "../../img/creta.png";
import motor from "../../img/motor.png";
import motor2 from "../../img/motor2.png";
import car from "../../img/car.png";
import klyuch from "../../img/klyuch.png";
import filtermotor from "../../img/filtermotor.png";
import eco from "../../img/eco.png";
import shield from "../../img/shield.png";
import box from "../../img/box.png";
import cabel from "../../img/cabel.png";
import fire from "../../img/fire.png";
import Slider from "react-slick";
import NewsSlider from "../comps/mainPage/NewsSlider";

const Main = css.Main;
const ContentLine = css.MainContentLine;
const Model3D = css.Model3D;
const Banner = css.MainContentLineBanner;
const Banner2 = css.MainContentLineBanner2;
const Banner3 = css.MainContentLineBanner3;

const MainPage = () => {
  const mainMenu = useSelector((state) => state.main.catalogMenu);
  const mainMenuRemote = useSelector((state) => state.main.catalogMenuRemote);
  const popularItems = useSelector((state) => state.catalog.popular);

  let jsonCatalog = useSelector((state) => state.catalog.generalCatalog);
  let generalCatalog = null;

  jsonCatalog
    ? (generalCatalog = JSON.parse(jsonCatalog)[0].product)
    : (generalCatalog = null);

  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let aaa;
  generalCatalog ? (aaa = random(10, generalCatalog.length - 10)) : (aaa = 0);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    false && console.log(random(10, generalCatalog.length - 10));
  }, [generalCatalog]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <React.Fragment>
      <RequestComponent
        make={false}
        callbackAction={"GET_CATALOG"}
        requestData={{
          type: "GET",
          urlstring: "/products",
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={"GET_CATEGORIES"}
        requestData={{
          type: "GET",
          urlstring: "/categories",
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={"GET_PROPS"}
        requestData={{
          type: "GET",
          urlstring: "/props",
        }}
      />

      <Main>
        <ContentLine
          style={{
            justifyContent: "space-between",
            marginBottom: "32px",
            alignItems: "flex-start",
            gap: 22,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "32px",
            }}
          >
            <Model3D style={{ width: "50%" }}>
              <h3
                style={{
                  marginTop: "36px",
                  marginLeft: "40px",
                  fontSize: "30px",
                  width: "70%",
                  fontFamily: "Mont",
                  fontWeight: 800,
                  lineHeight: "38px",
                  color: "#2E2E2E",
                }}
              >
                Интернет-магазин аккумуляторов и автотоваров
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <div>
                  <img alt={""} src={motor} />
                </div>
                <div>
                  <img style={{ width: "90%" }} alt={""} src={motor2} />
                </div>
              </div>
            </Model3D>
            <Model3D>
              <h3
                style={{
                  marginTop: "18px",
                  marginLeft: "40px",
                  fontSize: "30px",
                  width: "90%",
                  fontFamily: "Mont",
                  lineHeight: "38px",
                  color: "#565656",
                }}
              >
                Сеть надежных автосервисов
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <img
                  alt={""}
                  src={car}
                  // style={{
                  //   display: "block",
                  //   position: "absolute",
                  //   width: "240px",
                  //   left: "50%",
                  //   top: "100%",
                  //   borderRadius: "12px",
                  //   marginTop: "-220px",
                  //   marginLeft: "-120px",
                  // }}
                  style={{
                    marginBottom: 25,
                  }}
                />
              </div>
            </Model3D>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              // marginTop: -30,
              width: "30%",
            }}
          >
            <div
              style={{
             
                // width: "513px",
                width: "100%",
                height: "203px",
              }}
            >
             
              {/* <div style={containerStyles}> */}
                <NewsSlider delay={3} fire={fire}  />
              {/* </div> */}
              <div></div>
            </div>
            <div
              style={{
             
                // width: "513px",
                width: "100%",
                height: "203px",
              }}
            >
             
              {/* <div style={containerStyles}> */}
                <NewsSlider fire={fire}  />
              {/* </div> */}
              <div></div>
            </div>
         
          </div>
        </ContentLine>
        <ContentLine
          style={{
            marginBottom: 52,
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {[
            "для легковых автомобилей",
            "для грузовых",
            "для мотоциклов",
            "для лодок",
            "тяговые аккумуляторы",
            "промышленные",
            "для спецтехники",
            "для электросамокатов",
          ].map((item, index) => {
            return (
              <Button
                key={index}
                inner={item}
                params={{
                  background: "transparent",
                }}
                css={{
                  fontSize: "13px",
                  paddingTop: "7px",
                  paddingBottom: "8px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  marginRight: "13px",
                  marginBottom: 25,
                  // width: "auto"
                }}
              />
            );
          })}
        </ContentLine>
        <ContentLine
          style={{ justifyContent: "space-between", marginBottom: "32px" }}
        >
          <Banner>
            <p
              style={{
                fontFamily: "Mont",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "23px",
                lineHeight: "42px",
                width: "70%",
                color: "#FFFFFF",
              }}
            >
              Бесплатная установка в сервисных центрах
            </p>
            <img
              style={{
                position: "absolute",
                top: -27,
                right: "-6px",
              }}
              src={klyuch}
              alt=""
            />
          </Banner>
          <Banner2>
            <div>
              <p
                style={{
                  fontFamily: "Mont",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "23px",
                  lineHeight: "42px",
                  width: "70%",
                  marginBottom: 2,
                  color: "#FFFFFF",
                }}
              >
                Скидка за Ваш аккумулятор
              </p>
              <img src={eco} alt="" />
            </div>
            <img
              style={{
                position: "absolute",
                top: -27,
                right: "-17px",
              }}
              src={filtermotor}
              alt=""
            />
          </Banner2>

          <Banner3>
            <p
              style={{
                fontFamily: "Mont",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "23px",
                lineHeight: "42px",
                width: "20%",
                color: "#FFFFFF",
              }}
            >
              Расширенная гарантия
            </p>
            <img
              style={{
                position: "absolute",
                top: -47,
                right: -20,
              }}
              src={shield}
              alt=""
            />
          </Banner3>
        </ContentLine>

        <ContentLine style={{ marginBottom: "35px", marginTop: "9px" }}>
          <h2>Подбор аккумулятора</h2>
        </ContentLine>
        <ContentLine>
          <SelectAkk />
        </ContentLine>
        <ContentLine
          style={{
            marginBottom: "35px",
            marginTop: "9px",
            position: "relative",
          }}
        >
          <h2>Популярные товары</h2>
          <h4
            style={{
              width: "180px",
              textAlign: "right",
              display: "block",
              position: "absolute",
              left: "100%",
              marginLeft: "-180px",
              color: "grey",
              marginTop: "26px",
            }}
          >
            Смотреть все товары
          </h4>
        </ContentLine>
        {generalCatalog === null || generalCatalog.length === 0 ? (
          <ContentLine
            style={{ justifyContent: "flex-start", flexWrap: "wrap" }}
          >
            {popularItems
              ? popularItems.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <CardPreview
                        params={{ width: 15.833333, mleft: 0 }}
                        image={null}
                        title={item.name}
                        description={item.discr}
                        coast1={item.coast1}
                        coast2={item.coast2}
                        itemID={item.itemID}
                      />
                      {index < 5 && (
                        <span
                          style={{
                            display: "block",
                            position: "relative",
                            width: "1%",
                            height: "300px",
                            boxSizing: "border-box",
                          }}
                        ></span>
                      )}
                    </React.Fragment>
                  );
                })
              : null}
          </ContentLine>
        ) : (
          <ContentLine
            style={{ justifyContent: "flex-start", flexWrap: "wrap" }}
          >
            {generalCatalog
              ? generalCatalog.map((item, index) => {
                  false && console.log("--------------------------------");
                  false && console.log(item);
                  false && console.log("--------------------------------");

                  return (
                    <React.Fragment key={index}>
                      {index > aaa && index < aaa + 7 && (
                        <React.Fragment key={index}>
                          <CardPreview
                            params={{ width: 15.833333, mleft: 0 }}
                            image={null}
                            title={item.name}
                            popular={true}
                            description={[
                              `Бренд : ${item.properties[0].property[0].value[0]}`,
                              `Производитель : ${item.properties[0].property[1].value[0]}`,
                            ]}
                            coast1={
                              +item.pre_order_prices[0].region[0].price[0] === 0
                                ? "--"
                                : item.pre_order_prices[0].region[0].price[0]
                            }
                            coast2={
                              +item.pre_order_prices[0].region[0].price[0] === 0
                                ? "--"
                                : item.pre_order_prices[0].region[0].price[0]
                            }
                            itemID={item.id[0]}
                          />
                          {index < aaa + 6 && (
                            <span
                              style={{
                                display: "block",
                                position: "relative",
                                width: "1%",
                                height: "300px",
                                boxSizing: "border-box",
                              }}
                            ></span>
                          )}
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  );
                })
              : null}
          </ContentLine>
        )}
        <ContentLine style={{ marginBottom: "34px", marginTop: "1px" }}>
          <h2>Посмотрите наши акции</h2>
        </ContentLine>
        <ContentLine
          style={{ marginBottom: "32px", justifyContent: "space-between" }}
        >
          <Banner />
          <Banner />
          <Banner />
        </ContentLine>
        <ContentLine style={{ marginBottom: "36px" }}>
          <h2>Каталог товаров</h2>
        </ContentLine>
        <ContentLine
          style={{ justifyContent: "space-between", flexWrap: "wrap" }}
        >
          {!mainMenuRemote
            ? mainMenu.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <CategoryCard
                      catid={item.id}
                      title={item.label}
                      tags={item.tags}
                    />
                  </React.Fragment>
                );
              })
            : JSON.parse(mainMenuRemote)[0].group.map((item, index) => {
                false && console.log(item.name[0]);

                if (
                  item.parent_id[0] === "" &&
                  item.name[0].indexOf("Rossko") === -1 &&
                  item.name[0].indexOf("LC-1187") === -1 &&
                  item.name[0].indexOf("AP182/10") === -1 &&
                  item.name[0].indexOf("PCA-035") === -1
                ) {
                  const ID = item.id[0];
                  let idsArray = [ID];
                  let tagsArray = [];

                  false && console.log("--------------------------------");
                  false && console.log("--------------------------------");

                  JSON.parse(mainMenuRemote)[0].group.forEach((itemm) => {
                    if (itemm.parent_id[0] === ID) idsArray.push(itemm.id[0]);
                    if (itemm.parent_id[0] === ID)
                      tagsArray.push([itemm.id[0], itemm.name[0]]);
                  });

                  false && console.log(idsArray);

                  return (
                    <React.Fragment key={index}>
                      <CategoryCard
                        catid={idsArray}
                        title={item.name[0]}
                        tags={tagsArray}
                      />
                    </React.Fragment>
                  );
                }
              })}
        </ContentLine>
      </Main>
    </React.Fragment>
  );
};

export default MainPage;

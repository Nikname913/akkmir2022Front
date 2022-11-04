import React from "react";
import close from "../../../img/close.png";

export default function Registratsiya({ closeModal }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <h1
          style={{
            // fontFamily: "Mont",
            fontStyle: "normal",
            position: "relative",
            fontWeight: 800,
            fontSize: "38px",
            lineHeight: "37px",
            // width: "100%",
            textAlign: "left",
            color: "#2E2E2E",
          }}
        >
          Регистрация в бонусной программе
        </h1>
        <span
          style={{
            background: "#2BC631",
            borderRadius: "29px",
            padding: "5px 16px",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "112.8%",
            color: "#FFFFFF",
          }}
        >
          Выгодно
        </span>
      </div>
      <button
        onClick={closeModal}
        style={{
          outline: "none",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          position: "absolute",
          top: 18,
          right: 18,
        }}
      >
        <img src={close} alt="" />
      </button>
      <div>
        <div
          style={{
            marginTop: 30,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <span
            style={{
              // fontFamily: "Mont",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "112.8%",
              /* identical to box height, or 18px */

              color: "#565656",
            }}
          >
            Мобильный телефон*
          </span>
          <input
            placeholder="+7"
            style={{
              background: "#FCFCFC",
              border: "1px solid #D3D3D3",
              borderRadius: "12px",
              padding: "9px 13px",
            }}
            type="text"
          />
        </div>
        <div
          style={{
            marginTop: 30,
            // width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <span
            style={{
              // fontFamily: "Mont",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "112.8%",
              /* identical to box height, or 18px */

              color: "#565656",
            }}
          >
            Пароль
            <span
              style={{
                color: "#D62E2B",
              }}
            >
              *
            </span>
          </span>
          <input
            placeholder="Придумайте пароль"
            style={{
              background: "#FCFCFC",
              border: "1px solid #D3D3D3",
              borderRadius: "12px",
              padding: "9px 13px",
            }}
            type="text"
          />
        </div>
        <div
          style={{
            marginTop: 30,
            // width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <span
            style={{
              // fontFamily: "Mont",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "112.8%",
              /* identical to box height, or 18px */

              color: "#565656",
            }}
          >
            Повторите пароль
            <span
              style={{
                color: "#D62E2B",
              }}
            >
              *
            </span>
          </span>
          <input
            placeholder="Повторите пароль*"
            style={{
              background: "#FCFCFC",
              border: "1px solid #D3D3D3",
              borderRadius: "12px",
              padding: "9px 13px",
            }}
            type="text"
          />
        </div>
        <div
          style={{
            marginTop: 30,
            // width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <span
            style={{
              // fontFamily: "Mont",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "112.8%",
              /* identical to box height, or 18px */

              color: "#565656",
            }}
          >
            Марка транспортного средства
          </span>
          <input
            placeholder=""
            style={{
              background: "#FCFCFC",
              border: "1px solid #D3D3D3",
              borderRadius: "12px",
              padding: "9px 13px",
            }}
            type="text"
          />
        </div>
        <div
          style={{
            marginTop: 30,
            // width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <span
            style={{
              // fontFamily: "Mont",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "112.8%",
              /* identical to box height, or 18px */

              color: "#565656",
            }}
          >
            Имя
          </span>
          <input
            placeholder="Введите имя"
            style={{
              background: "#FCFCFC",
              border: "1px solid #D3D3D3",
              borderRadius: "12px",
              padding: "9px 13px",
            }}
            type="text"
          />
        </div>
        <div
          style={{
            marginTop: 30,
            // width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
          }}
        >
          <p
            style={{
              fontStyle: "normal",
              //   fontWeight: 600,
              fontSize: "16px",
            }}
          >
            <span
              style={{
                color: "#D62E2B",
              }}
            >
              *
            </span>{" "}
            - Поля отмеченные звездочкой обязательны для заполнения
          </p>
        </div>
        <div
          style={{
            marginTop: 30,
            // width: "100%",
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "left",
            gap: 14,
          }}
        >
         <span
                  onClick={() => setTradeinAkkum(prev => !prev)}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    position: 'relative',
                    width: '26px',
                    height: '26px',
                    borderRadius: '4px',
                    border: '1px solid #D3D3D3',
                    backgroundColor: 'white',
                    marginRight: '10px',
                    cursor: 'pointer'
                  }}
                >

                  { tradeinAkkum && <span

                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '12px',
                      height: '12px',
                      borderRadius: '6px',
                      backgroundColor: 'rgb(43, 198, 49)',
                    }}

                  /> }

                </span>
          <p
            style={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "112.8%",
            }}
          >
            Я согласен на обработку{" "}
            <span style={{ textDecoration: "underline" }}>
              персональных данных
            </span>
          </p>
        </div>
        <div
          style={{
            marginTop: 30,
            // width: "100%",
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 7,
          }}
        >
          <input
            type="submit"
            value={"Зарегистрироваться"}
            // readOnly={true}
            placeholder="Отправить"
            style={{
              //   width: 211,
              background: "#FCFCFC",
              border: "1px solid #D3D3D3",
              backgroundColor: "#565656",
              borderRadius: "12px",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#FFFFFF",
              outline: "none",
              padding: "11px 55px",
            }}
          />
          <a
            href=""
            style={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "20px",
              textDecorationLine: "underline",

              color: "#3C79BB",
            }}
          >
            Войти
          </a>
        </div>
      </div>
    </div>
  );
}

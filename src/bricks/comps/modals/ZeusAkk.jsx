// ------------------------------
// dev by omar
// ------------------------------
import React from "react";
import close from "../../../img/close.png";

export default function ZeusAkk({ closeModal }) {
  return (
    <div>
      <h1
        style={{
          fontStyle: "normal",
          position: "relative",
          fontWeight: 800,
          fontSize: "38px",
          lineHeight: "37px",
          width: false && "100%",
          textAlign: "left",
          color: "#2E2E2E",
        }}
      >
        Мы поможем подобрать аккумулятор
      </h1>
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
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "112.8%",
            // ------------------------------
            // identical to box height, or 18px
            // ------------------------------
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
            width: false && "100%",
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <span
            style={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "112.8%",
              // ------------------------------
              // identical to box height, or 18px
              // ------------------------------
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
            width: false && "100%",
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <span
            style={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "112.8%",
              // ------------------------------
              // identical to box height, or 18px
              // ------------------------------
              color: "#565656",
            }}
          >
            Ваше имя
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
            width: false && "100%",
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
              fontSize: "16px",
            }}
          >
            <span style={{ color: "#D62E2B" }}>*</span>
            {" "} - Поля отмеченные звездочкой обязательны для заполнения
          </p>
        </div>

        <div
          style={{
            marginTop: 30,
            width: false && "100%",
            display: "flex",
            flexDirection: false && "column",
            alignItems: "center",
            justifyContent: "left",
            gap: 7,
          }}
        >
          <input
            type="submit"
            value={"Заказать звонок"}
            placeholder="Отправить"
            style={{
              width: false && 211,
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
        </div>
      </div>
    </div>
  );
}

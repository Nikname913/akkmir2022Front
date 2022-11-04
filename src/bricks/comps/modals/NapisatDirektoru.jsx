import React from 'react'
import close from "../../../img/close.png";

export default function NapisatDirektoru({closeModal}) {
  return (
    <div>  
      <h1
        style={{
          fontFamily: false && "Mont",
          fontStyle: "normal",
          position: "relative",
          fontWeight: 800,
          fontSize: "38px",
          lineHeight: "37px",
          textAlign: "center",
          color: "#2E2E2E",
        }}
      >Письмо директору</h1>
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
            Телефон
          </span>
          <input
            placeholder="Введите телефон"
            style={{
              background: "#FCFCFC",
              border: "1px solid #D3D3D3",
              borderRadius: "12px",
              padding: "9px 13px",
            }}
            type="text"
          />
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 4,
            }}
          >
            <span>IC</span>
            <p
              style={{
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "112.8%",
                color: "#C4C4C4",
              }}
            >Обязательное поле</p>
          </div>
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
            Имя
          </span>
          <input
            placeholder="Введите телефон"
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
            Почта
          </span>
          <input
            placeholder="Введите телефон"
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
            Сообщение
          </span>
          <input
            placeholder="Введите телефон"
            style={{
              background: "#FCFCFC",
              border: "1px solid #D3D3D3",
              borderRadius: "12px",
              padding: "9px 13px 48px 13px",
            }}
            type="text"
          />
        </div>
        <div
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
          }}
        >
          <input
            type="submit"
            value={"Отправить"}
            placeholder="Отправить"
            style={{
              width: 211,
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
  )
}

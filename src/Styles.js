const backgroundColor = "#F3F0ED";

export default {

    backgroundColor: backgroundColor,

    singleColumn: {
        minWidth: 250,
        maxWidth: 500,
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },

    singleColumnContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },

    desktopRow: {
        display: "flex",
        flexDirection: "row",
        maxWidth: 761,
        width: "100%",
        justifyContent: "space-between",
    },

    column: {
        width: 350,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    },

    button: {
        padding: "10px 20px 10px 20px",
        color: backgroundColor,
        backgroundColor: "#444",
        borderRadius: 5,
        display: "inline-block",
        cursor: "pointer",
    },

    highlight: {
        display: "inline",
        fontWeight: 900,
    }
}
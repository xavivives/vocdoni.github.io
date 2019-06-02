
const backgroundColor = "#F3F0ED"

export default  {

    singleColumn: {
        minWidth: 300,
        maxWidth: 400,
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },

    singleColumnContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: backgroundColor,
        width: "100%"
    },

    center: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor:"pink",
        width: "100%"
    },

    desktopRow: {
        display: "flex",
        flexDirection: "row",
        width: 761,
        justifyContent: "space-between",
        backgroundColor:"yellow"
    },

    column: {
        width: 350,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"green"
    }
}
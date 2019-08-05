import axios from "axios";

export default {
    registerUser: function (user) {
        return axios.post("/auth/register", user);

    },
    findUser: function (user) {
        return axios.post("/auth/login", user);
    },
    //this function should use axios to call url from server to get the data from database 
    getUserInfoFromDB: function (email) {
        return axios.get("/api/getUserInfo/" + email)

    },
    updateSkills: function (skills, id) {
        let data = { skills: skills, id: id }
        console.log(data)
        return axios.post("/api/updateSkills/", data)
    },

    saveImage: function (image,email) {
        let file={file:image, email:email}
      console.log(file)
        return axios.post("/api/saveimage", file)
    },
    updateAddress: function (data) {
        return axios.post("/api/updateAdress", data)
    },

    saveBid : function(user,priceNumber,status,jobId){
        let data = { user : user , priceNumber : priceNumber ,status:status,jobId:jobId }
        return axios.post("/api/savebid",data)
    }

}

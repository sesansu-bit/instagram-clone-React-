import { createContext} from "react";
import {useState} from "react";
export const store= createContext([

]); 


const StoreContextProvider =({children})=>{

    const [story,setstory] = useState([{
        id: '1',
        Image: 'http://www.telegraph.co.uk/content/dam/fashion/2015-%2007/July17/lucky-blue-smith-xlarge.jpg',
        Name:'_sahaj...',
        storycontent:['https://i.pinimg.com/originals/a3/a3/f0/a3a3f09b8f3b8b7b92140e1f2f03aa03.jpg']
    },
    {
        id: '2',
        Image: 'https://i.pinimg.com/736x/82/67/20/8267204c8ec12d3382a874cf2050825e.jpg',
        Name:'me_sam...'  ,
        storycontent:['https://i.pinimg.com/originals/70/53/b7/7053b79f52fafcc743d55e6e31ad6954.jpg']      
    },
    {
        id: '3',
       Image: 'https://tse3.mm.bing.net/th?id=OIP.68NL4wEUbqenNzY0UYCuWgHaJQ&pid=Api&P=0&h=180',
        Name:'_Anuska...',
        storycontent:['https://i.pinimg.com/originals/e5/ef/ad/e5efad10a90a072c715d55b476c2b3d6.jpg']
    },
    {
        id: '4',
        Image: 'https://www.modelmanagement.com/blog/wp-content/uploads/2020/09/mario-rodriguez.png',
        Name:'me_riaz...',
        storycontent:['https://i.pinimg.com/originals/2f/d0/89/2fd0894a0389ffbe317dd67ab136ee16.jpg']
    },
    {
        id: '5',
        Image: 'https://tse2.mm.bing.net/th?id=OIP.mR-AK0mxli56O74w_YrILQHaJ4&pid=Api&P=0&h=180',
        Name:'_rashmika...',
        storycontent:['https://www.splento.com/blog/wp-content/uploads/2021/08/Male-model-photography.jpg']
    },
    {
        id: '6',
        Image: 'https://tse2.mm.bing.net/th?id=OIP.Oqu68urPE4ssXbIgXDRL5AAAAA&pid=Api&P=0&h=180',
        Name:'me_rahul...',
        storycontent:['https://wallpaperaccess.com/full/4408982.jpg']
    },
    {
        id: '7',
        Image: 'https://tse3.mm.bing.net/th?id=OIP.5lAkNpWy0RrQfuc42dLWuwHaLH&pid=Api&P=0&h=180',
        Name:'me_ayan...',
        storycontent:['https://i.pinimg.com/originals/32/83/02/32830246d24535300afa3a8429e1becf.jpg']
    
    },
    {
        id: '8',
        Image: 'https://tse4.mm.bing.net/th?id=OIP.sdFH8Obw484lRvZVSi6o_AHaFx&pid=Api&P=0&h=180',
        Name:'_lovely...',
        storycontent:['https://st3.depositphotos.com/2056297/14635/i/1600/depositphotos_146356345-stock-photo-fashion-male-model.jpg']
    },
    {
        id: '9',
        Image: 'https://tse4.mm.bing.net/th?id=OIP.VptYq4W8whj1Mo05DCrCbAHaLG&pid=Api&P=0&h=180',
        Name:'me_robin...',
        storycontent:['https://go-models.com/uploads/page-images/male-catalogue-model.jpg']
    },
    {
        id: '10',
        Image: 'http://www.liveenhanced.com/wp-content/uploads/2018/04/male-model-poses-19.jpg',
        Name:'me_aryan...',
        storycontent:['https://i.pinimg.com/originals/1f/83/ed/1f83eda71992bb7b8e69e4ec1f016dfc.jpg']
    },
    {
        id: '11',
        Image: 'https://i.pinimg.com/originals/93/4e/9f/934e9f24b5454dd1f864b460702585b9.jpg',
        Name:'its_sehnaz..',
        storycontent:['https://www.stylevore.com/wp-content/uploads/2019/12/68725404_542431342980938_4727303685942417399_n.jpg']
    }]);
    
const [post,setpost] = useState([{
    id: '1',
    image: 'https://cdn.fstoppers.com/styles/full/s3/photos/2017/10/99a47e65d8ac4ad0aba8be4a6cc4d236.jpg?itok=3gbhsxt-',
    name:'Sayam1234',
    likescount:'1,00,000',
    profilephoto : 'https://cdn.fstoppers.com/styles/full/s3/photos/2017/10/99a47e65d8ac4ad0aba8be4a6cc4d236.jpg?itok=3gbhsxt-'
},
{
    id: '2',
    image: 'http://www.therichest.com/wp-content/uploads/2013/10/364.jpg',
    name:'sahrukh768',
    likescount:'1,30,000', 
    profilephoto :'http://www.therichest.com/wp-content/uploads/2013/10/364.jpg'
},
{
    id: '3',
    image: 'https://i.pinimg.com/originals/93/d4/3c/93d43c25b863001ad11b70c3500c0e77.jpg',
    name:'samkhan826',
    likescount:'1,50,000',
    profilephoto :'https://i.pinimg.com/originals/93/d4/3c/93d43c25b863001ad11b70c3500c0e77.jpg'
},
{
    id: '4',
    image: 'https://wallpapersmug.com/download/1440x2880/aaa678/beautiful-girl-model-juicy-lips-brunette.jpg',
    name:'Akriti_670',
    likescount:'1,60,000',
    profilephoto :'https://wallpapersmug.com/download/1440x2880/aaa678/beautiful-girl-model-juicy-lips-brunette.jpg'
},

{
    id: '5',
    image: 'https://i.pinimg.com/originals/ed/38/e4/ed38e4bd6df488aae92dfd911b5883ef.jpg',
    name:'ARWAJ_894',
    likescount:'1,05,000',
    profilephoto :'https://i.pinimg.com/originals/ed/38/e4/ed38e4bd6df488aae92dfd911b5883ef.jpg'
},
{
    id: '6',
    image: 'https://i.pinimg.com/originals/03/67/13/0367138099f1e030fb8dba8d53b8ecc1.jpg',
    name:'anya.804',
    likescount:'1,09,000',
    profilephoto : 'https://i.pinimg.com/originals/03/67/13/0367138099f1e030fb8dba8d53b8ecc1.jpg'
},
{
    id: '7',
    image: 'https://i.pinimg.com/originals/00/bc/d9/00bcd992d2ccbf5d8510814051499342.jpg',
    name:'Amira34',
    likescount:'1,30,000',
    profilephoto : 'https://i.pinimg.com/originals/00/bc/d9/00bcd992d2ccbf5d8510814051499342.jpg'
},
{
    id: '8',
    image: 'https://coolwallpapers.me/picsup/5072404-blue-eyes-brunette-face-girl-model-woman.jpg',
    name:'ayan.934',
    likescount:'1,70,000',
    profilephoto : 'https://coolwallpapers.me/picsup/5072404-blue-eyes-brunette-face-girl-model-woman.jpg'
},
{
    id: '9',
    image: 'https://coolwallpapers.me/picsup/5086039-brunette-depth-of-field-girl-model-woman.jpg',
    name:'Nysa.894',
    likescount:'1,70,000',
    profilephoto :  'https://coolwallpapers.me/picsup/5086039-brunette-depth-of-field-girl-model-woman.jpg'
},
{
    id: '10',
    image: 'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-noah.jpg',
    name:'Arushi_94',
    likescount:'1,90,000',
    profilephoto :'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-noah.jpg'
},
{
    id: '11',
    image: 'https://i.pinimg.com/736x/cd/2d/c9/cd2dc9b68d204845c30023f2fbe56e02--strike-a-pose-sean-opry.jpg',
    name:'paras_498',
    likescount:'1,09,000',
    profilephoto : 'https://i.pinimg.com/736x/cd/2d/c9/cd2dc9b68d204845c30023f2fbe56e02--strike-a-pose-sean-opry.jpg'
},
{
    id: '12',
    image: 'https://coolwallpapers.me/picsup/2893669-women-outdoors-women-model___people-wallpapers.jpg',
    name:'faiz.908',
    likescount:'1,04,000',
    profilephoto :  'https://coolwallpapers.me/picsup/2893669-women-outdoors-women-model___people-wallpapers.jpg'
}])  ;
const[createstoryshow,setcreatestoryshow]=useState(false);
const[searchshow,setsearchshow]=useState(false);
const[notificationshow,setnotificationshow]=useState(false);
const[createpostshow,setcreatepostshow]=useState(false);

const additem=(image,name,likescount,profilephoto)=>{
const merge=[{image,name,likescount,profilephoto},...post];
setpost(merge);
}
const handelRemove=(username)=>{
    const merge=post.filter((postname)=>postname.name!=username);
    setpost(merge);
  }
const addstory=(Image,Name,storycontent)=>{
    const mergestory=[{Image,Name,storycontent},...story];
    setstory(mergestory); 
}

 return <store.Provider value={{post,handelRemove,story,addstory,createstoryshow,setcreatestoryshow,searchshow,setsearchshow,notificationshow,additem,createpostshow,setcreatepostshow,setnotificationshow}}>
{children}
 </store.Provider>

}
export default StoreContextProvider; 
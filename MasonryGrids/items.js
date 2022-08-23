
const posts = [];

const images = [
    'https://images.unsplash.com/photo-1615801627253-eae9c5be334e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9ob3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://cdn.trendhunterstatic.com/phpthumbnails/190/190412/190412_1_800.jpeg',
    'https://i.etsystatic.com/5854709/r/il/49bead/383275918/il_fullxfull.383275918_bkpu.jpg',
    'https://cdn.shopify.com/s/files/1/1890/4833/products/image_d1c7b487-7390-495f-b70b-56abf621353a_530x@2x.jpg?v=1571439738',
    'https://thumbs.dreamstime.com/b/wedding-bouquet-boho-style-background-nature-bride-holds-dried-flowers-194745810.jpg',
    'https://i.pinimg.com/originals/d8/2c/ef/d82cef7e0b532df1ea3920288a62d76c.jpg',
    'https://cdn.wallpapersafari.com/25/49/XSl8NW.jpg',
    'https://www.aucklandweddings.co.nz/laravel-filemanager/images/filemanager/Handy%20Tips%20for%20Same%20Sex%20Weddings/D.Lillian%20Photography%20.jpg',
    'https://wallpaperaccess.com/full/3943238.jpg',
    'https://dancingwithher.com/wp-content/uploads/2021/07/Emma-Macaulay-photography-lesbian-gay-same-sex-two-brides-forest-bush-elopement-Margaret-River-Western-Australia-21.jpg',
];

let imageIndex = 0;

for(let i = 0; i < 80; i++){
    let item = {
        id: i,
        title: 'Post ${1}',
        image: images [imageIndex]
    }
    posts.push(item);
    imageIndex++
    if(imageIndex > images.length - 1) imageIndex = 0;
}

// console.log(posts)

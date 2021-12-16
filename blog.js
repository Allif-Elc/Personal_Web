const data = [];

function addBlog(event){
        event.preventDefault();

        let title = document.getElementById("input-blog-title").value;
        let content = document.getElementById("input-blog-content").value;
        let image = document.getElementById("input-blog-image").files;
        
        image = URL.createObjectURL(image[0]);

        let news ={
            title:title,
            content: content,
            image: image,
            author: "Allif Taufiq",
            postAt: new Date(),

        };
    
         
        const post = data.push(news);
        manupalationHTML();
};

function manupalationHTML(){
    let contentContainer = document.getElementById("contents");

    contentContainer.innerHTML = " ";

    for (let i=0;i<data.length;i++){ 
        contentContainer.innerHTML += `
                    <div class="blog-list-item">
                    <div class="blog-image">
                    <img src="${data[i].image}" alt="" />
                    </div>
                    <div class="blog-content">
                    <div class="btn-group">
                        <button class="btn-edit">Edit Post</button>
                        <button class="btn-post">Post Blog</button>
                    </div>
                    <h1>
                        <a href="blog-detail.html" target="_blank"
                        >${data[i].title}</a
                        >
                    </h1>
                    <div class="detail-blog-content">
                        ${getTimePost(data[i].postAt)} | ${data[i].author}  
                    </div>
                    <p>${data[i].content}</p>
                    <div>
                        ${getTimeDifference(data[i].postAt)}
                    </div>
                    </div>
                </div> `;
    }
};

const month = [ 
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];

function getTimePost(time){
    let date = time.getDate();
    let monthIndex = time.getMonth();
    let year = time.getFullYear();

    let hours = time.getHours();
    let minutes = time.getMinutes();

    let result = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;
    return result;
};

function getTimeDifference(timePost){
    let postAt = timePost;
    let timeNow = new Date();
 
    let difference = timeNow - postAt;

    const milisecond = 1000;
    const minutes = 60;
    const hours = 60;
    const days = 23;

    let daysDifference = Math.floor(difference/(milisecond*minutes*hours*days));
    let hoursDifference = Math.floor(difference/(milisecond*minutes*hours));
    let minutesDifference = Math.floor(difference/(milisecond*minutes));
    let secondsDifference = Math.floor(difference/(milisecond));
     
    if (daysDifference >= 1){
        return `${daysDifference} day ago`;
    } if (hoursDifference >= 1) {
        return `${hoursDifference} hour ago`;
    } if (minutesDifference >= 1) {
        return `${minutesDifference} minute ago`;      
    } else{
        return `${secondsDifference} second ago`;
    }             
 
};

setInterval(()=>{
    manupalationHTML();
},1000);
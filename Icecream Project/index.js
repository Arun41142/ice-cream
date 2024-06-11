let is_shop_opened="false";
let para=document.querySelector('p');

let open=document.querySelector('.open');
let close=document.querySelector('.close');
let image=document.querySelector('.icecream_img');
let info=document.querySelector('.content');
let customer_img=document.querySelector('.customer_img');
let fruits_img=document.querySelector('.fruits_img');


close.style.display='none';


function openClose(is_shop_opened){
    if(is_shop_opened){
        open.style.display='none';
        close.style.display='block';
        para.innerHTML="shop is opened, Do you want to close?";
        info.innerHTML="Magic Ice-cream welcomes you!";
        info.classList.add('text-success');
        info.classList.remove('text-danger');
        image.src="./images/icecreamOpen.png";
        production();
        }else{
            open.style.display='block';
            close.style.display='none';
            para.innerHTML="shop is closed, Do you want to open?";
            info.innerHTML="Shop is closed! please visit again";
            info.classList.remove('text-success');
            info.classList.add('text-danger');
            image.src="./images/icecreamclosed.png";
            }

}


function production(){
    setTimeout(()=>{
        info.innerHTML="order is processing...";
        customer_img.style.display='block';
        setTimeout(() => {
            info.innerHTML="cutting fruits...";
            customer_img.style.display='none';
            customer_img.src="./images/chef.png";
            customer_img.style.display='block';
            fruits_img.style.display='block';
            setTimeout(() => {
                info.innerHTML="Add Water and Ice...";
                fruits_img.style.display='none';
                fruits_img.src="./images/liquids.png"
                fruits_img.style.display='block';
                setTimeout(() => {
                    info.innerHTML="starting the machine...";
                    fruits_img.style.display='none';
                    setTimeout(() => {
                        info.innerHTML="Select the container...";
                        fruits_img.src="./images/container.png";
                        fruits_img.style.display='block';
                        setTimeout(() => {
                            info.innerHTML="Select the Toppings...";
                            fruits_img.style.display='none';
                            fruits_img.src="./images/toppings.png";
                            fruits_img.style.display='block';
                            setTimeout(() => {
                                info.innerHTML="Serve the Ice-cream Happy!!";
                                fruits_img.style.display='none';
                                customer_img.src="./images/ice_cream.png";
                                customer_img.style.height="600px";
                                customer_img.style.width="400px";
                                customer_img.style.display='block';
                                setTimeout(() => {
                                    info.innerHTML="Next Order, Please!!";
                                    customer_img.style.display='none';
                                }, 3000);
                            },3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
                
            },5000);
        }, 3000);
    },3000);

};
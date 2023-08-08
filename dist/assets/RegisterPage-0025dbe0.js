import{b as m,d as f,r as p,e as w,o as x,c as k,f as e,w as d,v as i,u as s,g as y,h as a,a as h,i as _}from"./index-b3494d6f.js";const v={class:"w-[25rem] p-10 bg-slate-200 rounded-lg shadow-lg"},C=e("div",{class:"mb-10"},[e("h2",{class:"text-3xl text-center"},"Create an account")],-1),V={class:"mb-6"},S=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},[a("Your email "),e("span",{class:"text-red-500"},"*")],-1),T={class:"mb-6"},q=e("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},[a("Your password "),e("span",{class:"text-red-500"},"*")],-1),B={class:"mb-6"},N=e("label",{for:"password_confirmation",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},[a("Confirm password "),e("span",{class:"text-red-500"},"*")],-1),U=e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Submit ")],-1),A={class:"text-center mt-5"},Y={__name:"RegisterPage",setup(M){const c=m(),l=f();let r=p({email:"",password:"",passwordConfirm:""}),n=()=>{try{l.register(r.email,r.password,r.passwordConfirm)}catch(u){Toast.fire({icon:"error",title:u.message})}b()},b=()=>{l.login(r.email,r.password),l.loggedIn===!0&&(Toast.fire({icon:"success",title:"Logged in successfully!"}),c.push("/"))};return(u,t)=>{const g=w("router-link");return x(),k("div",v,[C,e("form",{class:"w-full",onSubmit:t[3]||(t[3]=y((...o)=>s(n)&&s(n)(...o),["prevent"]))},[e("div",V,[S,d(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s(r).email=o),type:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@flowbite.com",required:""},null,512),[[i,s(r).email]])]),e("div",T,[q,d(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s(r).password=o),type:"password",id:"password",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[i,s(r).password]])]),e("div",B,[N,d(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>s(r).passwordConfirm=o),type:"password",id:"password_confirmation",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[i,s(r).passwordConfirm]])]),U],32),e("div",A,[a("Already have an account? "),h(g,{class:"text-indigo-600",to:"/auth/login"},{default:_(()=>[a("Sign in")]),_:1})])])}}};export{Y as default};

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { auth } from '../../firebase.init';
import useService from '../../Hooks/useService';


const CheckOut = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    // const [services] = useService()
    //  console.log(id);
    const [services, setServices] = useState([])
    const [photoGraphyPackage, setPhotoPackage] = useState([])
    const [storePrice, setStorePrice] = useState(0)
    console.log(storePrice, 'setStorePrice');
    const [singlePhotoPackagePrice, setSinglePhotoPackagePrice] = useState(0)
    const [singlePackagePrice, setSinglePackagePrice] = useState(0)
    const [singleFoodPackagePrice, setSingleFoodPackagePrice] = useState(0)
    console.log(singleFoodPackagePrice, 'SingleFoodPackagePrice')
    const [singleFoodPackage, setSingleFoodPackage] = useState([])
    console.log(singleFoodPackage,"singleFoodPackage")
    const [weddingStage,setWeddingStage] = useState([])
    const [hinduStage,sethinduStage] = useState([])
    const [hinduStagePrice,sethinduStagePrice] = useState(0)
    const [weddingStagePrice, setWeddingStagePrice] = useState(0)
    const [holudStage,setHoludStage] = useState([])
    const [holudStagePrice, setholudStagePrice] = useState(0)
    
    const [birthdayStage,setBirthdayStage] = useState([])
    const [birthdayStagePrice, setBirthdayStagePrice] = useState(0)
    
    const [themebirthdayStage,setThemeBirthdayStage] = useState([])
    const [themebirthdayStagePrice, setThemeBirthdayStagePrice] = useState(0)
    
    const [businessStage,setBusinessStage] = useState([])
    const [businessStagePrice, setBusinessStagePrice] = useState(0)

    const [reunionStage,setReunionStage] = useState([])
    const [reunionStagePrice,setReunionStagePrice] = useState(0)
    
    console.log(reunionStagePrice,'reunionStagePrice')
    const [newTotalPrice, setNewTotalPrice] = useState(0)
    const [photoLink, setPhotoLink] = useState('')
    console.log(photoLink,'photolink');
    const [packageName,setPackageName] = useState({})
console.log(newTotalPrice,'newTotalPrice')
console.log(packageName,'packageName')
    
    const [blurPhoto, setBlurPhoto] = useState({})
    console.log(blurPhoto, 'blurPhoto');
    //console.log(photoGraphyPackage,"photo-pck");
    console.log(services,"services")
    console.log(parseInt(singlePhotoPackagePrice), 'singlePhotoPackagePrice')
    
    console.log(singlePackagePrice +weddingStagePrice + holudStagePrice +hinduStagePrice + birthdayStagePrice +themebirthdayStagePrice + businessStagePrice + singleFoodPackagePrice + setReunionStagePrice+reunionStagePrice  ,'allnewprice')

 
    useEffect(() => {
        fetch('http://localhost:4000/package')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])


    let AllnewPrice;
  
    
 
    useEffect(() => {
        if (singlePackagePrice || singlePhotoPackagePrice || singleFoodPackagePrice || hinduStagePrice || weddingStagePrice || holudStagePrice || birthdayStagePrice || themebirthdayStagePrice || businessStagePrice|| reunionStagePrice) {
            
     
        
            AllnewPrice = parseInt(singlePackagePrice) + parseInt(weddingStagePrice) + parseInt(holudStagePrice) + parseInt(hinduStagePrice) + parseInt(birthdayStagePrice) + parseInt(themebirthdayStagePrice) + parseInt(businessStagePrice) + parseInt(singleFoodPackagePrice) + parseInt(reunionStagePrice)  

            setNewTotalPrice(AllnewPrice)
            console.log(AllnewPrice,'Allnewprice');
        }
        else {
            AllnewPrice = 0;
            setNewTotalPrice(AllnewPrice)
        }
       
    }, [singlePackagePrice , singlePhotoPackagePrice , singleFoodPackagePrice , hinduStagePrice , weddingStagePrice, holudStagePrice, birthdayStagePrice ,themebirthdayStagePrice , businessStagePrice, reunionStagePrice,singlePhotoPackagePrice])
    useEffect(() => {
        fetch('http://localhost:4000/photography')
            .then(response => response.json())
            .then(data => setPhotoPackage(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:4000/food')
            .then(response => response.json())
            .then(data => setSingleFoodPackage(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:4000/wedding')
            .then(response => response.json())
            .then(data => setWeddingStage(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:4000/holud')
            .then(response => response.json())
            .then(data => setHoludStage(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:4000/hinduStage')
            .then(response => response.json())
            .then(data => sethinduStage(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:4000/normalBirthday')
            .then(response => response.json())
            .then(data => setBirthdayStage(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:4000/themeBirthday')
            .then(response => response.json())
            .then(data => setThemeBirthdayStage(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:4000/business')
            .then(response => response.json())
            .then(data => setBusinessStage(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:4000/reunion')
            .then(response => response.json())
            .then(data => setReunionStage(data))
    }, [])


   


    const [user] = useAuthState(auth)



    const confirmOrder = e => {
        e.preventDefault();
        console.log(e.target, "chck e")

        let photoPacakage;
        console.log(e.target?.photography?.value);
        if (e.target?.photography?.value == 'choose') {
            photoPacakage = 'own PhotoGraphy'
        } else {
            photoPacakage = e.target?.photography?.value
        }
        const foundPhoto = photoGraphyPackage.filter(photoGraphyPack =>
            photoGraphyPack.name === e.target?.photography?.value
        )

        let foodMenu;
        if (e.target?.food?.value == 'choose') {
            foodMenu= 'own'
        } else {
            foodMenu = e.target.food.value
        }
       

        const name = e.target.personname.value;
        const sendPackage = e.target.photographyname.value;
        const email = user.email;
        const phone = e.target.phone.value;
        const decoration = e.target?.stage?.value;
        const holudStage = e.target?.holudstage?.value 
        const hinduStage = e.target?.hindustage?.value 
       
        const sendFoodMenu =foodMenu;
        const sendPrice = newTotalPrice;
        const image = photoLink;
        const adults = e.target.adults.value;
        //const child = e.target.children.value;
        const Address = e.target.address.value;
        const checkin = e.target.checkin.value;
        const startTime = e.target.time.value;
        const description = e.target.description.value;
        const Photography = photoPacakage
        // console.log(name, Photography, email, phone, sendPackage, sendPrice, adults, checkin, startTime, description);
        const sendOrder = { name, email, phone, sendPackage, sendPrice, adults, checkin, startTime, description, image, Address, Photography,sendFoodMenu,decoration,hinduStage,holudStage }
       
       console.log(sendOrder,'sendOrder')
        fetch(`http://localhost:4000/order`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(sendOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success(`Dear ${name}, We received your order.We will contact you soon.`)
                    toast.info(`Go to your Dashboard to see your order details`)
                    e.target.reset()
                }
                else {
                    toast.error('Sorry!!There is a problem.Try again')
                }
            })

    }
    //new code for package-----------!SECTION

    const handlePackagePrice = (e) => {
        if (e.target.value == 'choose' || e.target.value == 'own') {
            setSinglePackagePrice(0)
        }
        else {
            const selectPackage = e.target.value
            console.log(selectPackage, 'selectpackage');
            const newPackage = services.filter(packageName => packageName.name == selectPackage)
            console.log(newPackage, 'newPackage')
            setSinglePackagePrice(newPackage[0].price)
            setPackageName(newPackage)
            setPhotoLink(newPackage[0].img)
        }

    }
   
    const photoPackagePrice = (e) => {
        if (e.target.value == 'choose' || e.target.value == 'own') {
            setSinglePhotoPackagePrice(0)
        }
        else {
            const selectPhotoPackagePrice = e.target.value
            console.log(selectPhotoPackagePrice, 'selectpackage');
            const newPhotoPackagePrice = photoGraphyPackage.filter(PhotopackageName => PhotopackageName.name == selectPhotoPackagePrice)
            console.log(newPhotoPackagePrice, 'newPackagePhoto')
            setSinglePhotoPackagePrice(newPhotoPackagePrice[0].price)

        }

    }
    const handleFoodPrice = (e) => {
        if (e.target.value == 'choose'|| e.target.value == 'own') {
            setSingleFoodPackagePrice(0)
            // singleFoodPrice
        }
        else {
            const selectFoodPrice = e.target.value
            console.log(selectFoodPrice, 'selectpackage');
            const newFoodPrice = singleFoodPackage.filter(singleFood => singleFood.name ==  selectFoodPrice)
            console.log(newFoodPrice, 'newFoodPrice')
            setSingleFoodPackagePrice(newFoodPrice[0].price)

        }

    }
    const handleWeddingStage = (e) => {
        if (e.target.value == 'choose' || e.target.value == 'own') {
            setWeddingStagePrice(0)
            // singleFoodPrice
        }
        else {
            const selectStagePrice = e.target.value
            console.log(selectStagePrice, 'selectpackage');
            const newStagePrice = weddingStage.filter(singleStage => singleStage.name ==  selectStagePrice)
            console.log(newStagePrice, 'newPackagePhoto')
            setWeddingStagePrice(newStagePrice[0].price)

        }

    }
    const handleHoludStage = (e) => {
        if (e.target.value == 'choose' || e.target.value == 'own') {
            setholudStagePrice(0)
            // singleFoodPrice
        }
        else {
            const selectHoludStagePrice = e.target.value
            console.log(selectHoludStagePrice, 'selectpackage');
            const newHoludStagePrice = holudStage.filter(singleHoludStage => singleHoludStage.name ==  selectHoludStagePrice)
            console.log( newHoludStagePrice, 'newPackagePhoto')
            setholudStagePrice( newHoludStagePrice[0].price)

        }

    }
    const handleHinduStage = (e) => {
        if (e.target.value == 'choose' || e.target.value == 'own') {
            sethinduStagePrice(0)
            // singleFoodPrice
        }
        else {
            const selectHinduStagePrice = e.target.value
            console.log(selectHinduStagePrice , 'selectpackage');
            const newHinduStagePrice = hinduStage.filter(singleHinduStage => singleHinduStage.name ==  selectHinduStagePrice)
            console.log( newHinduStagePrice, 'newPackagePhoto')
            sethinduStagePrice( newHinduStagePrice[0].price)

        }

    }
    const handleBirthdayStage = (e) => {
        if (e.target.value == 'choose' || e.target.value == 'own') {
            setBirthdayStagePrice(0)
            // singleFoodPrice
        }
        else {
            const selectBirthdayStagePrice = e.target.value
            console.log(selectBirthdayStagePrice, 'selectpackage');
            const newBirthdayStagePrice = birthdayStage.filter(singleBirthdayStage => singleBirthdayStage.name ==  selectBirthdayStagePrice)
            console.log( newBirthdayStagePrice, ' newBirthdayStagePrice')
            setBirthdayStagePrice( newBirthdayStagePrice[0].price)

        }

    }
    const handleThemeBirthdayStage = (e) => {
        if (e.target.value == 'choose' || e.target.value == 'own') {
            setThemeBirthdayStagePrice(0)
            // singleFoodPrice
        }
        else {
            const selectThemeBirthdayStagePrice = e.target.value
            console.log(selectThemeBirthdayStagePrice , 'selectpackage');
            const newThemeBirthdayStagePrice = themebirthdayStage.filter(singleThemeBirthdayStage => singleThemeBirthdayStage.name == selectThemeBirthdayStagePrice )
            console.log( newThemeBirthdayStagePrice , ' newBirthdayStagePrice')
            setThemeBirthdayStagePrice( newThemeBirthdayStagePrice [0].price)

        }

    }
    const handleBusiness = (e) => {
        if (e.target.value == 'choose' || e.target.value == 'own') {
            setBusinessStagePrice(0)
            // singleFoodPrice
        }
        else {
            const selectBusinessStagePrice = e.target.value
            console.log(selectBusinessStagePrice , 'selectpackage');
            const newBusinessStagePrice = businessStage.filter(singleBusinessStage => singleBusinessStage.name == selectBusinessStagePrice )
            console.log( newBusinessStagePrice , ' newBirthdayStagePrice')
            setBusinessStagePrice( newBusinessStagePrice[0].price)

        }

    }
    const handleReunion = (e) => {
        if (e.target.value == 'choose' || e.target.value == 'own') {
            setReunionStagePrice(0)
            // singleFoodPrice
        }
        else {
            const selectReunionStagePrice = e.target.value
            console.log(selectReunionStagePrice , 'selectpackage');
            const newReunionStagePrice = reunionStage.filter(singlereunionStage => singlereunionStage .name == selectReunionStagePrice )
            console.log( newReunionStagePrice  , ' newBirthdayStagePrice')
            setReunionStagePrice( newReunionStagePrice [0].price)

        }

    }
    // wedding stge 
   
    let a = packageName[0]?.name;
    
    let chooseWedding;
    let birthday;
    let business;
    let reunion;
    
    console.log(a,'packageName[0]?.name');
    if (a == "Wedding Event") {
        
            chooseWedding =   
            <>
            <div className="mb-6 flex  items-center ">
        <div>
            <label className='form-font font-bold text-2xl'>Wedding Reception Stage :</label><br />
            <select onClick={handleWeddingStage } name='stage'  className="select select-bordered w-full max-w-xs" >
                <option >choose</option>
                <option>Stage-1</option>
                <option>Stage-2</option>
                <option>Stage-3</option>
                <option>own</option>
        
            </select>

        </div>
        <div className=" mt-10 ml-10">
            <label htmlFor="BDT" className=' font-bold text-xl'>BDT:</label>
            <input className=" rounded" type="number" value={weddingStagePrice} />
        </div>
                </div>
                
                <div className="mb-6 flex  items-center ">
                        <div>
                            <label className='form-font font-bold text-2xl'>Holud  Stage :</label><br />
                            <select onClick={handleHoludStage} name='holudstage' className="select select-bordered w-full max-w-xs" >
                                <option >choose</option>
                                <option>Stage-1</option>
                                <option>Stage-2</option>
                            <option>Stage-3</option>
                            <option>own</option>
                            </select>

                        </div>
                        <div className=" mt-10 ml-10">
                            <label htmlFor="BDT" className=' font-bold text-xl'>BDT:</label>
                            <input className=" rounded" type="number" value={holudStagePrice} />
                        </div>
                    </div>
                    <div className="mb-6 flex  items-center ">
                        <div>
                            <label className='form-font font-bold text-2xl'>Specefic Wedding Stage For Hindu :</label><br />
                            <select onClick={handleHinduStage} name='hindustage'  className="select select-bordered w-full max-w-xs" >
                                <option >choose</option>
                                <option>Stage-1</option>
                                <option>Stage-2</option>
                            <option>Stage-3</option>
                            <option>own</option>
                            </select>

                        </div>
                        <div className=" mt-10 ml-10">
                            <label htmlFor="BDT" className=' font-bold text-xl'>BDT:</label>
                            <input className=" rounded" type="number" value={hinduStagePrice} />
                        </div>
                    </div>
        </>
        
        
    }
    if (a == "Birthday Party") {
        
    birthday=   
            <>
             <div className="mb-6 flex  items-center ">
                        <div>
                            <label className='form-font font-bold text-2xl'>Normal Decoration :</label><br />
                            <select onClick={handleBirthdayStage} name='photography' className="select select-bordered w-full max-w-xs" >
                                <option >choose</option>
                                <option>decoration-1</option>
                                <option>decoration-2</option>
                    <option>decoration-3</option>
                    <option>own</option>
                            </select>

                        </div>
                        <div className=" mt-10 ml-10">
                            <label htmlFor="BDT" className=' font-bold text-xl'>BDT:</label>
                            <input className=" rounded" type="number" value={birthdayStagePrice} />
                        </div>
                    </div>
                    <div className="mb-6 flex  items-center ">
                        <div>
                            <label className='form-font font-bold text-2xl'>Theme Decoration :</label><br />
                            <select onClick={handleThemeBirthdayStage} name='photography' className="select select-bordered w-full max-w-xs" >
                                <option >choose</option>
                                <option>decoration-1</option>
                                <option>decoration-2</option>
                    <option>decoration-3</option>
                    <option>own</option>
                            </select>

                        </div>
                        <div className=" mt-10 ml-10">
                            <label htmlFor="BDT" className=' font-bold text-xl'>BDT:</label>
                            <input className=" rounded" type="number" value={themebirthdayStagePrice} />
                        </div>
                    </div>
        </>
        
        
    }
    if (a == "Business Fair" || a=="Political Conference" || a=="Corporate Event") {
        
        business=   
            <>
                <div className="mb-6 flex  items-center ">
                        <div>
                            <label className='form-font font-bold text-2xl'>decoration :</label><br />
                            <select onClick={handleBusiness} name='stage'  className="select select-bordered w-full max-w-xs" >
                                <option >choose</option>
                                <option>Bronze</option>
                                <option>Silver</option>
                        <option>Gold</option>
                        <option>own</option>
                            </select>

                        </div>
                        <div className=" mt-10 ml-10">
                            <label htmlFor="BDT" className=' font-bold text-xl'>BDT:</label>
                            <input className=" rounded" type="number" value={businessStagePrice} />
                        </div>
                    </div>
        </>
        
        
    }
    if (a == "Reunion Program" || a=="Fairwell Event" || a=="Rag Day Program") {
        
        reunion=   
            <>
                   <div className="mb-6 flex  items-center ">
                        <div>
                            <label className='form-font font-bold text-2xl'>Decoration:</label><br />
                            <select onClick={handleReunion} name='stage' className="select select-bordered w-full max-w-xs" >
                                <option >choose</option>
                                <option>Bronze</option>
                                <option>Silver</option>
                        <option>Gold</option>
                        <option>own</option>
                            </select>

                        </div>
                        <div className=" mt-10 ml-10">
                            <label htmlFor="BDT" className=' font-bold text-xl'>BDT:</label>
                            <input className=" rounded" type="number" value={reunionStagePrice} />
                        </div>
                    </div>
        </>
        
        
    }
  
  
    return (
        <div>

            <div style={{ margin: "10%" }}>
                <h1 className='text-center text-3xl sp-style mt-20'>Fill the form,If you want to purchase this service</h1>
                <form onSubmit={confirmOrder} className='mt-5 add-cover'>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl'>Email :</label>
                        <input value={user.email} type="email" id="text" name='email' placeholder='Enter your email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl'> Name :</label>
                        <input type="text" id="text" name='personname' placeholder="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>


                    <div className="mb-6">
                        <label htmlFor="phone" className='form-font font-bold text-2xl'>Your Phone :</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter Your Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6 ">
                        <label htmlFor="phone" className='form-font font-bold text-2xl'>Address :</label>
                        <input type="text" id="address" name="adress" placeholder="Enter Your address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6 flex items-center ">
                        <div>
                            <label className='form-font font-bold text-2xl'>Choose Your Package :</label><br />
                            <select onClick={handlePackagePrice} name='photographyname' className="select select-bordered w-full max-w-xs" >
                                <option >choose</option>
                                <option>Political Conference</option>
                                <option>Corporate Event</option>
                                <option> Rag Day Program</option>
                                <option>Reunion Program</option>
                                <option>Business Fair</option>
                                <option>Birthday Party</option>
                                <option>Fairwell Event</option>
                                <option>Wedding Event</option>
                                <option> Custom package-1</option>
                                <option>customize package-2</option>
                                <option>own</option>
                            </select>



                        </div>
                        <div className="mt-2   ml-10">
                            <label htmlFor="BDT" className=' font-bold text-xl'>BDT:</label>
                            <input className="mt-5 rounded" type="number" name="name" value={singlePackagePrice} />
                        </div>

                    </div>
    
                    {chooseWedding}
                    {birthday}
                    {business}
                    {reunion}
   
                  
               
                 
                   
                 

                    <div className="mb-6 flex items-center justify-center">
                        <div>
                            <label className='form-font font-bold text-2xl'>PhotoGraphy (optional) :</label><br />
                            <select onClick={photoPackagePrice} name='photography' className="select select-bordered w-full max-w-xs" >
                                <option >choose</option>
                                <option>package-1</option>
                                <option>package-2</option>
                                <option>package-3</option>
                                <option>package-4</option>
                                <option>package-5</option>
                                <option>package-6</option>
                                <option>own</option>

                            </select>
                            <p className="text-gray-900">**If you want to take our photography service,choose your suitable package.
                                Otherwise,choose your own Photography

                            </p>
                        </div>
                        <div className=" flex mr-52 items-center justify-center">
                            <label htmlFor="BDT" className=' font-bold text-xl'>BDT:</label>
                            <input className="rounded" type="number" value={singlePhotoPackagePrice} />
                        </div>
                    </div>
                 
                    <div className="mb-6 flex items-center justify-center">
                        <div>
                        <label className='form-font font-bold text-2xl'>Food Menu (optional) :</label><br />
                        <select onClick={handleFoodPrice}name='food' className="select select-bordered w-full max-w-xs" >
                            <option >choose</option>
                            <option>platter-1</option>
                            <option>platter-2</option>
                            <option>platter-3</option>
                            <option>platter-4</option>
                            <option>platter-5</option>
                            <option>platter-6</option>
                            <option>own</option>

                        </select>
                        <p className="text-gray-900">**If you want to take our Food Menu service,choose your suitable package.
                            Otherwise,choose your own Food Menu

                        </p>     
                        </div>
                        <div className=" flex mr-52 items-center justify-center">
                            <label htmlFor="BDT" className=' font-bold text-xl'>BDT:</label>
                            <input className=" rounded" type="number" value={singleFoodPackagePrice} />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl' htmlFor="adult">Limits of Guests :</label>
                        <input type="number" id="adult" name="adults" placeholder="Range of guests" min="1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        <p className="text-gray-900">**Must provide your guests list to the Authority</p>
                    </div>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl'>Total Price :</label>
                        <input type="number" value={newTotalPrice} id="text" name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl' htmlFor="checkin-date">Check-in Date :</label>
                        <input type="date" id="checkin-date" name="checkin"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl' htmlFor="checkout-date">Starting Time :</label>
                        <input type="time" id="time" name="time"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl'>Anything Else??</label>
                        <textarea rows="10" cols="80" type="text" id="text" name='description' placeholder="Tell us" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='text-center'>
                        <input type="submit" className="text-white bg-[#00112B]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-1/5 w-1/2 px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800" value='Confirm' />
                    </div>
                </form>

            </div>
        </div>

    );
};

export default CheckOut;
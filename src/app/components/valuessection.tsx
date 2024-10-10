import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';


export default function ValuesSection(){
    return (
        <section className=' flex justify-center h-auto my-20'>
            <div className='w-full h-full flex gap-6 justify-center items-center flex-wrap flex-row'>
              <div className='w-[350px] h-[330px] bg-gray-200'>
                <div className='w-full h-full flex justify-center items-start px-8 flex-col'>
                     <LocalShippingOutlinedIcon className='text-7xl'/>
                     <div className='mt-4'>
                     <h3 className='text-2xl font-semibold py-2'>Free Shipping</h3>
                     <p className='text-gray-500 text-lg py-2'>Order above $200</p>
                     </div>
                   
  
                </div>
              </div>
             
              <div className='w-[350px] h-[330px] bg-gray-200'>
                <div className='w-full h-full flex justify-center items-start px-8 flex-col'>
                     <AttachMoneyOutlinedIcon className='text-7xl'/>
                     <div className='mt-4'>
                     <h3 className='text-2xl font-semibold py-2'>Money Back</h3>
                     <p className='text-gray-500 text-lg py-2'>30 days guarantee</p>
                     </div>
                   
  
                </div>
              </div>

              <div className='w-[350px] h-[330px] bg-gray-200'>
                <div className='w-full h-full flex justify-center items-start px-8 flex-col'>
                     <LockOutlinedIcon className='text-7xl'/>
                     <div className='mt-4'>
                     <h3 className='text-2xl font-semibold py-2'>Secure Payments</h3>
                     <p className='text-gray-500 text-lg py-2'>Secured by Stripe</p>
                     </div>
                   
  
                </div>
              </div>

              <div className='w-[350px] h-[330px] bg-gray-200'>
                <div className='w-full h-full flex justify-center items-start px-8 flex-col'>
                     <PhoneOutlinedIcon className='text-7xl'/>
                     <div className='mt-4'>
                     <h3 className='text-2xl font-semibold py-2'>24/7 Support</h3>
                     <p className='text-gray-500 text-lg py-2'>Phone and email support</p>
                     </div>
                   
  
                </div>
              </div>

            </div>
        </section>
    )
}
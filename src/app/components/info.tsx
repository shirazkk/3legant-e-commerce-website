import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


export default function InfoSection(){
    return (
        <section className=' flex justify-center items-center h-auto my-14'>
            <div className='w-full h-full flex gap-6 justify-center items-center flex-wrap '>
              <div className='w-[450px] h-[200px] bg-gray-200'>
                <div className='w-full h-full flex justify-center items-center px-8 flex-col'>
                     <HomeOutlinedIcon className='text-4xl'/>
                     <div className='mt-4'>
                     <h3 className='text-center text-xl font-semibold text-customGrayBlue py-2'>Address</h3>
                     <p className='text-gray-500 text-center text-lg py-2 font-semibold'>234 Hai Trieu, Ho Chi Minh City,<br />VietName</p>
                     </div>
                   
  
                </div>
              </div>
             
              <div className='w-[450px] h-[200px] bg-gray-200'>
                <div className='w-full h-full flex justify-center items-center px-8 flex-col'>
                     <PhoneOutlinedIcon className=' text-4xl'/>
                     <div className='mt-4'>
                     <h3 className='text-center text-xl font-semibold py-2 text-customGrayBlue'>Phone</h3>
                     <p className='text-gray-500 text-center text-lg py-2 font-semibold'>+84 234 567 890</p>
                     </div>
                   
  
                </div>
              </div>

              <div className='w-[450px] h-[200px] bg-gray-200'>
                <div className='w-full h-full flex justify-center items-center px-8 flex-col'>
                     <EmailOutlinedIcon className='text-4xl'/>
                     <div className='mt-4'>
                     <h3 className='text-center text-xl font-semibold py-2 text-customGrayBlue'>Email</h3>
                     <p className='text-gray-500 text-center text-lg  py-2 font-semibold'>Hello@3legant.com</p>
                     </div>
                   
  
                </div>
              </div>

            </div>
        </section>
    )
}
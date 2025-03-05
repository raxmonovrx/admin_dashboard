import Data from '../data.json'
import MailIcon from '/icons/iconMail.svg'
import PhoneIcon from '/icons/iconPhone.svg'

const CardContact = () => {
	return (
		<div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 p-1'>
			{Data.map(user => (
				<div
					key={user.id}
					className='p-5 bg-white rounded-2xl transition-all shadow-[0px_4px_8px_0px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_6px_0px_rgba(0,0,0,0.35)] max-w-[500px] flex flex-col gap-4 relative'
				>
					<button className='absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6 text-gray-500'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
							/>
						</svg>
					</button>

					{/* Profil rasmi */}
					<div className='flex justify-center'>
						<img
							src={user.image}
							alt='Contact'
							className='w-24 h-24 rounded-xl object-cover shadow-md'
						/>
					</div>

					{/* Foydalanuvchi ma'lumotlari */}
					<div className='text-center'>
						<h3 className='text-lg font-semibold text-gray-800'>{user.name}</h3>
						<p className='text-sm text-gray-500'>{user.jobTitle} at</p>
						<p className='text-sm font-semibold text-purple-600'>
							{user.company}
						</p>
					</div>

					{/* Aloqa ma'lumotlari */}
					<div className='flex flex-col gap-2'>
						<div className='flex items-center gap-3'>
							<img src={PhoneIcon} alt='Phone' className='w-5 h-5' />
							<span className='text-sm font-medium text-gray-700'>
								{user.phone}
							</span>
						</div>
						<div className='flex items-center gap-3'>
							<img src={MailIcon} alt='Mail' className='w-5 h-5' />
							<span className='text-sm font-medium text-gray-700'>
								{user.email}
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CardContact



const OurMap = () => {
    return (
        <div className='flex flex-col justify-center items-center h-96'>
            <div className="h-full w-full flex justify-center p-4">
                <iframe
                    title="our location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.437474988804!2d90.36752857457975!3d23.803037786754913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1fa13c3521d%3A0x7e9113ef0f1fe673!2sXEON%20TECHNOLOGY%20LIMITED!5e0!3m2!1sen!2sbd!4v1748157025293!5m2!1sen!2sbd"
                    width="85%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                ></iframe>
            </div>
        </div>
    );
};

export default OurMap;
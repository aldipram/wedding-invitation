const Maps = () => {
  return (
    <div className="">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.823276598205!2d108.31093257499762!3d-7.030047792971795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDEnNDguMiJTIDEwOMKwMTgnNDguNiJF!5e0!3m2!1sid!2sid!4v1710745467228!5m2!1sid!2sid"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[30vh] "
        />
    </div>
  );
};

export default Maps;
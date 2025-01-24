function MobileRecharge({ postpaid }) {
  const { srcImg, imgAlt, title } = postpaid;
  return (
    <>
      <div className="mobile-recharge text-center py-4 px-3 rounded-3">
        <div className="mobile-recharge-imgWrapper mx-auto">
          <img
            src={srcImg}
            alt={imgAlt}
            className="h-100 w-100 object-fit-cover"
          />
        </div>
        <div>
          <h5 className="mb-0">{title}</h5>
        </div>
      </div>
    </>
  );
}

export default MobileRecharge;

function Footer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 px-8 md:px-16 lg:px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-black">ABOUT</h5>

        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-black">COMMUNITY</h5>

        <p>Accessibility</p>
        <p>Airbnb Associates</p>
        <p>Guest Referrals</p>
        <p>Gift cards</p>
        <p>Airbnb.org</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-black">HOST</h5>

        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p>Host an Experience</p>
        <p>Responsible hosting</p>
        <p>Resource Center</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-black">SUPPORT</h5>

        <p>Our COVID-19 Response</p>
        <p>Help Center</p>
        <p>Cancellation options</p>
        <p>Neighborhood Support</p>
        <p>Trust & Safety</p>
      </div>
    </div>
  );
}

export default Footer;

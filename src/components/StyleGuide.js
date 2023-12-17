import "./StyleGuide.css";

const StyleGuide = () => {
  return (
    <div className="style-guide">
      <div className="footer">
        <div className="content">
          <div className="social-wrapper">
            <img
              className="facebook-negative"
              alt=""
              src="/facebook--negative@2x.png"
            />
            <img
              className="facebook-negative"
              alt=""
              src="/twitter--negative@2x.png"
            />
            <img
              className="facebook-negative"
              alt=""
              src="/instagram--negative@2x.png"
            />
            <img
              className="facebook-negative"
              alt=""
              src="/linkedin--negative@2x.png"
            />
          </div>
          <div className="contact-informations">
            <div className="finstreet-118-2561">Finstreet 118 2561 Fintown</div>
            <div className="hellofinsweetcom-020-7993">
              Hello@finsweet.com 020 7993 2905
            </div>
          </div>
          <div className="cta">
            <div className="button">
              <b className="subscribe">Subscribe</b>
            </div>
            <div className="input">
              <div className="enter-your-email">Enter Your Email</div>
            </div>
            <b className="subscribe-to-our">
              Subscribe to our news letter to get latest updates and news
            </b>
          </div>
          <div className="links-list">
            <div className="home">Home</div>
            <div className="home">Blog</div>
            <div className="about-us">About us</div>
            <div className="home">Contact us</div>
            <div className="home">Privacy Policy</div>
          </div>
          <img className="logo-icon" alt="" src="/logo@2x.png" />
        </div>
      </div>
      <div className="navbar">
        <div className="button1">
          <b className="subscribe">Subscribe</b>
        </div>
        <div className="links-list1">
          <div className="home">Home</div>
          <div className="home">Blog</div>
          <div className="about-us">About Us</div>
          <div className="home">Contact us</div>
        </div>
        <img className="logo-icon1" alt="" src="/logo@2x.png" />
      </div>
      <div className="social1">
        <b className="social-wrapper1">Social wrapper</b>
        <div className="social-wrapper2">
          <img
            className="facebook-negative"
            alt=""
            src="/facebook--negative@2x.png"
          />
          <img
            className="twitter-negative1"
            alt=""
            src="/twitter--negative@2x.png"
          />
          <img
            className="facebook-negative"
            alt=""
            src="/instagram--negative@2x.png"
          />
          <img
            className="facebook-negative"
            alt=""
            src="/linkedin--negative@2x.png"
          />
        </div>
      </div>
      <div className="buttons">
        <div className="button2">Button</div>
        <div className="button-hover">Button hover</div>
        <div className="button3">
          <b className="subscribe">{`Read More >`}</b>
        </div>
        <div className="button4">
          <b className="subscribe">{`Read More >`}</b>
        </div>
        <b className="buttons1">Buttons</b>
      </div>
      <div className="color-palette">
        <b className="social-wrapper1">Color Palette</b>
        <div className="colors">
          <div className="colors-child" />
          <div className="colors-item" />
          <div className="colors-inner" />
          <div className="rectangle-div" />
          <div className="colors-child1" />
          <div className="colors-child2" />
          <div className="colors-child3" />
          <div className="colors-child4" />
        </div>
      </div>
      <div className="paragraph-text-styles">
        <div className="text-style-body-1">
          <div className="sen-regular-size">Sen Regular Size 16 px Line 28</div>
          <b className="label">Body 01</b>
          <div className="apparently-we-had">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectato
          </div>
        </div>
        <div className="text-style-body-2">
          <div className="sen-regular-size">Sen Regular Size 14 px Line 20</div>
          <b className="label">Body 02</b>
          <div className="apparently-we-had1">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectato
          </div>
        </div>
        <div className="text-style-label">
          <div className="sen-med-size">Sen Med Size 14 px Line 20</div>
          <b className="label">Label</b>
          <div className="apparently-we-had2">Apparently we had reached</div>
        </div>
      </div>
      <div className="heading-sizes">
        <div className="display">
          <b className="display1">Display</b>
          <div className="sen-bold-size">Sen Bold Size 56px Line 64</div>
        </div>
        <div className="heading-1">
          <b className="display1">Heading H1</b>
          <div className="sen-bold-size">Sen Bold Size 48px Line 64</div>
        </div>
        <div className="heading-2">
          <b className="social-wrapper1">Heading H2</b>
          <div className="sen-bold-size">Sen Bold Size 36px Line 48</div>
        </div>
        <div className="heading-3">
          <b className="heading-h3">Heading H3</b>
          <div className="sen-bold-size">Sen Bold Size 28px Line 36</div>
        </div>
        <div className="heading-4">
          <b className="heading-h4">Heading H4</b>
          <div className="sen-bold-size">Sen Bold Size 24px Line 32</div>
        </div>
        <div className="heading-5">
          <b className="heading-h4">Heading H5</b>
          <div className="sen-bold-size">Sen Bold Size 20px Line 32</div>
        </div>
        <div className="heading-6">
          <b className="subscribe">Heading H6</b>
          <div className="sen-bold-size6">Sen Bold Size 16px Line 24</div>
        </div>
      </div>
      <div className="font-family-download">
        <div className="font-family-download-child" />
        <div className="download-link">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector@2x.png" />
            <b className="aa">Aa</b>
          </div>
          <b className="sen">{`Sen `}</b>
        </div>
        <b className="download-the-font">Download the Font family 👉</b>
        <img className="download-icon" alt="" src="/download-icon@2x.png" />
        <b className="typography">Typography</b>
      </div>
      <div className="style-guide-header">
        <div className="style-guide-line" />
        <b className="style-guide1">Style Guide</b>
      </div>
    </div>
  );
};

export default StyleGuide;

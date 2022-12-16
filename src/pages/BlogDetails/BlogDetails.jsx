import React from "react";
import { Link } from "react-router-dom";
// === Styled Components ===
import { Figure, Section, BlockQuote, Footer } from "./index";
import { CardAuthor, CardTitle } from "../../components/NewsItem/index";
// === Img ===
import img from "../../assets/images/news/2.jpg";
// === Components ===
import TopSection from "../../components/TopSection/TopSection";

// === Icons ===
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const BlogDetails = () => {
  return (
    <main>
      <TopSection
        title="READY, (DINING) SET, GO! "
        name="DINING ROOM FURNITURE TO SUIT ANY SPACE"
      />
      <article className="container">
        <div className="m-auto col-lg-9">
          <Figure>
            <img src={img} alt="" />
          </Figure>
          <Section>
            <CardAuthor>
              By
              <Link to="/">Andrey </Link>
              <Link to="/">14 September, 2023</Link>
            </CardAuthor>
            <CardTitle>
              <Link to="/">EAT, WORK, LOVE</Link>
            </CardTitle>
            <p>
            After several months of noshing your way through all the poolside BBQs, picnics in the park, and ice cream dates summer has to offer, you may have forgotten what it’s like to sit down to a meal at home. But with the end of summer on the horizon, now seems like a pretty good time to revamp your indoor dining room set-up.
            With so many things to consider, like style, room shape, materials, size, and function (we told you — it’s a lot), furnishing a dining space can seem daunting. Whether you’re looking to fully redesign a formal dining room or simply spruce up that cozy nook in the corner of your kitchen, our selection of dining room sets will help you get excited about indoor dining (and even hosting) all over again.
            </p>
            <BlockQuote>
              <p>
              A match made in interior design heaven: wood and glass. Bringing a bit of mid-century modern flair, the ​​Tafulo Dining Table knows how to keep things bright and open.
              </p>
            </BlockQuote>
            <p>
            Looking for a cozy breakfast nook that instantly transforms into a chic WFK (work from kitchen) spot come 9am? Say no more. With its Carrara marble top and brass-plated steel pedestal base, the Erno Dining Table will make you want to settle in and stay a while.
            </p>
            <h3>
              <strong>
                Sed do eiumod tempor incididunt ut labore et dolore magna
                aliqua.
              </strong>
            </h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/7e90gBu4pas?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
            <p>
            looking to transform your formal dining room from everyday din-din spot to inviting event destination at a moment’s notice? Then the Madera Dining Table is your perfect match. Boasting a richly textured oak tabletop, this extendable design embodies style and function like nobody’s business. Whatever the occasion — chill get-togethers, milestone birthdays, your bff’s baby shower — the leaf extension will allow you to easily accommodate up to twelve guests. Create a magazine-worthy modern farmhouse look by pairing it with the Dabo Dining Chairs. 
            </p>
          </Section>
          <Footer>
            <div>
              <span>Tags:</span>
              <ul>
                <li>
                  <Link to="/">furniture,</Link>
                </li>
                <li>
                  <Link to="/">react</Link>
                </li>
              </ul>
            </div>
            <div>
              <span>Share:</span>
              <ul>
                <li>
                  <Link to="/">
                    <BsFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <AiOutlineTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsPinterest />
                  </Link>
                </li>
              </ul>
            </div>
          </Footer>
        </div>
      </article>
    </main>
  );
};

export default BlogDetails;

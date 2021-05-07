import React, { useEffect } from 'react';
import charlie from '../assets/charlie-5.jpg';

/*
  Components
*/
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <Header type="light" fixed />
      <main className="main">
        <Jumbotron height={70} />
        <section className="content">
          <div className="content__container">
            <h1 className="content__title">Qui sommes-nous ?</h1>
            <div className="paragraph">
              <p className="paragraph__text">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare nisl hac sed risus, ullamcorper quam. Lobortis feugiat risus mi amet, cras maecenas quisque sagittis, nibh. Turpis enim tortor turpis ultricies euismod adipiscing. Volutpat pharetra molestie neque pellentesque ullamcorper enim eget nulla. In vel at habitant convallis curabitur nibh ac a, aliquet. Ullamcorper adipiscing eu hendrerit fermentum scelerisque nisi, feugiat viverra nulla. Sed a, ornare eu at scelerisque egestas. Ut nisi, quam non vitae elementum aliquam molestie ante. Sapien dictum pretium pellentesque eleifend lacinia. Integer quam scelerisque quam risus nulla est viverra.`}
              </p>
              <div className="paragraph__split">
                <img className="paragraph__img" src={charlie} alt="" />
                <div>
                <p className="paragraph__text">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin nisl, orci velit, nunc, aliquam sit est at semper. Diam egestas at et ac dolor, nullam aliquam feugiat. Id nulla adipiscing ipsum consectetur massa leo sit euismod. Nulla pulvinar leo tincidunt commodo posuere elementum malesuada. Placerat egestas scelerisque cras dolor massa feugiat. Morbi tincidunt est aliquam ipsum malesuada purus scelerisque habitasse. Scelerisque morbi molestie nec, faucibus orci. Erat neque, aenean elementum maecenas adipiscing ipsum. Varius velit consectetur sit congue aliquam id sed ipsum. Semper nibh quis leo est. Nisl phasellus gravida odio facilisis nam. Malesuada pellentesque molestie aliquet ultrices.`}
                </p>
                <p className="paragraph__text">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin nisl, orci velit, nunc, aliquam sit est at semper. Diam egestas at et ac dolor, nullam aliquam feugiat. Id nulla adipiscing ipsum consectetur massa leo sit euismod. Nulla pulvinar leo tincidunt commodo posuere elementum malesuada. Placerat egestas scelerisque cras dolor massa feugiat.`}
                </p>
                </div>
              </div>
              <p className="paragraph__text">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget neque quam at lectus augue vel massa sed. Id vulputate aliquam parturient leo facilisi ultrices. Et sollicitudin proin magnis quam et dolor euismod. Nisl aenean justo, turpis eu. Eget id vel quam sit rutrum nec lacus. Ullamcorper venenatis lectus id eu elit, elementum faucibus cras proin. Magna nulla vitae fames turpis dolor. Consequat purus felis odio neque.`}
              </p>
              <p className="paragraph__text">
                {`Sodales volutpat semper mauris mauris. Mauris vulputate donec ultricies felis. Lorem diam risus ultricies mattis justo, habitasse mauris. Nunc ullamcorper fermentum mi auctor sociis pellentesque aliquet. Semper nullam justo, volutpat congue sit tortor consectetur. Nunc maecenas urna, senectus consequat. Augue ante cursus commodo volutpat, metus viverra enim lacus mattis. Nisi at eu, at malesuada maecenas adipiscing. Dolor a, et suspendisse orci amet ut etiam tellus.`}
              </p>
              <p className="paragraph__text">
                {`Turpis sagittis feugiat tempor blandit euismod eget nullam euismod pharetra. Nascetur nisl vestibulum, interdum tincidunt arcu in vel. Eu mattis nunc diam amet. Aliquam venenatis nullam rhoncus donec nunc arcu nunc. Odio sed montes, neque nullam aliquam. In felis aenean nisi id pretium, eu neque, pharetra, et. Porttitor leo, cursus hendrerit et nulla ultrices. Libero amet rhoncus varius a placerat duis varius nulla sit. Eu egestas nibh sapien sit vitae sollicitudin. Cursus adipiscing non bibendum vitae ornare. Sit cursus penatibus elit est mauris velit tempus, scelerisque in.`}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;

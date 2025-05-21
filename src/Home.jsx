import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function Home() {
    return (
        <>
            <section id='Slider'>
                <Carousel data-bs-theme="dark">


                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            style={{ height: '450px' }}
                            src="https://images.pexels.com/photos/15031440/pexels-photo-15031440/free-photo-of-a-crowd-standing-in-front-of-the-kedarnath-temple-in-kedarnath-india-during-a-ceremony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <Carousel.Caption>

                            <p style={{ color: 'white', fontSize: '20px', backgroundColor: 'black', borderRadius: '20px', fontFamily: 'monospace' }}>
                                "In the silence of the Himalayas, Kedarnath echoes with divine presence."
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            style={{ height: '450px' }}
                            src="https://images.pexels.com/photos/186985/pexels-photo-186985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <Carousel.Caption>

                            <p style={{ color: 'white', fontSize: '20px', backgroundColor: 'black', borderRadius: '20px', fontFamily: 'monospace' }}>
                                "Nature speaks in the quiet moments—we just have to listen."
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            style={{ height: '450px' }}
                            src="https://images.pexels.com/photos/725745/pexels-photo-725745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <Carousel.Caption>

                            <p style={{ color: 'white', fontSize: '20px', backgroundColor: 'black', borderRadius: '20px', fontFamily: 'monospace' }}>
                                "Breathe in nature, exhale peace."
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            style={{ height: '450px' }}
                            src="https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <Carousel.Caption>

                            <p style={{ color: 'white', fontSize: '20px', backgroundColor: 'black', borderRadius: '20px', fontFamily: 'monospace' }}>
                                "A symbol of peace, purity, and divine serenity — the Golden Temple shines in every heart."
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            style={{ height: '450px' }}
                            src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>

                            <p style={{ color: 'white', fontSize: '20px', backgroundColor: 'black', borderRadius: '20px', fontFamily: 'monospace' }}>
                                "Life is better in flip-flops by the sea."
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            style={{ height: '450px' }}
                            src="https://images.pexels.com/photos/2785865/pexels-photo-2785865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Third slide"
                        />
                        <Carousel.Caption>

                            <p style={{ color: 'white', fontSize: '20px', backgroundColor: 'black', borderRadius: '20px', fontFamily: 'monospace' }}>
                                "Nature is the art of God, painted in peace."
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>



                </Carousel>
            </section>

            <section id='Hills'>

                <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
                    <h1 style={{ textAlign: 'center' }}>Hills Stations</h1>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginLeft: '5rem', marginRight: '5rem' }}>

                        {/* Card 1 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/2961109/pexels-photo-2961109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Kasol</Card.Title>
                                <p style={{ fontWeight: "bold" }}>
                                    Kasol is a scenic village in Himachal Pradesh, known for its serene Parvati River, trekking trails, Israeli culture, cafes, and as a popular backpacker and nature lover’s destination.
                                </p>

                            </Card.Body>
                        </Card>


                        {/* Card 2 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/shimla/mmt/destination/m_landscape_l_400_640.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Shimla</Card.Title>

                                <p style={{ fontWeight: "bold" }}>
                                    Shimla, the capital of Himachal Pradesh, is known for its colonial architecture, scenic hills, Mall Road, toy train, snowfall in winter, and as a popular hill station for tourists year-round.
                                </p>

                            </Card.Body>
                        </Card>

                        {/* Card 3 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Leh_tv_destination_img_4_l_667_1000.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Leh</Card.Title>

                                <p style={{ fontWeight: "bold" }}>
                                    Leh, in Ladakh, is known for its stunning mountains, Buddhist monasteries, Pangong Lake, Nubra Valley, adventure sports, high passes like Khardung La, and rich Tibetan-influenced culture.
                                </p>

                            </Card.Body>
                        </Card>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginLeft: '5rem', marginRight: '5rem', marginTop: '2rem' }}>

                        {/* Card 4 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_wayanad_tv_destination_img_4_l_619_928.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Wayanad</Card.Title>

                                <p style={{ fontWeight: "bold" }}>
                                    Wayanad, in Kerala, is known for its lush green hills, waterfalls, wildlife sanctuaries, tea and spice plantations, Edakkal Caves, trekking spots, and rich tribal heritage.
                                </p>

                            </Card.Body>
                        </Card>

                        {/* Card 5 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/landsdown/mmt/destination/m_destination-lansdowne-landscape_l_400_640.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Lansdowne</Card.Title>

                                <p style={{ fontWeight: "bold" }}>
                                    Lansdowne, a serene hill station in Uttarakhand, is known for its quiet charm, pine forests, British-era architecture, War Memorial, Bhulla Tal Lake, and scenic mountain views.
                                </p>

                            </Card.Body>
                        </Card>

                        {/* Card 6 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/gulmarg/mmt/destination/m_destination-gulmarg-landscape_l_400_640.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Gulmarg</Card.Title>

                                <p style={{ fontWeight: "bold" }}>
                                    Gulmarg, in Jammu & Kashmir, is famous for its snow sports, scenic meadows, Gondola ride, skiing, lush greenery in summer, and as a top winter destination with breathtaking Himalayan views.
                                </p>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </section>

            <section id='Temples'>
                <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
                    <h1 style={{ textAlign: 'center' }}>Temples</h1>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginLeft: '5rem', marginRight: '5rem' }}>

                        {/* Card 1 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="data:image/jpeg;base64,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" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Ram Mandir</Card.Title>
                                <p style={{ fontWeight: "bold" }}>
                                    Ram Mandir in Ayodhya is a grand Hindu temple dedicated to Lord Ram, built at his birthplace. It symbolizes faith, cultural heritage, and features stunning architecture and spiritual significance.
                                </p>


                            </Card.Body>
                        </Card>

                        {/* Card 2 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/28892091/pexels-photo-28892091/free-photo-of-golden-temple-at-night-in-amritsar-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Golden Temples</Card.Title>
                                <p style={{ fontWeight: "bold" }}>
                                    The Golden Temple in Amritsar is a sacred Sikh shrine known for its golden architecture, spiritual peace, holy Sarovar, langar (community kitchen), and its message of equality and devotion.
                                </p>

                            </Card.Body>
                        </Card>

                        {/* Card 3 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="data:image/jpeg;base64,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" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Vaishno Devi</Card.Title>

                                <p style={{ fontWeight: "bold" }}>
                                    Vaishno Devi, in Jammu & Kashmir, is a revered Hindu pilgrimage site dedicated to Goddess Vaishno Devi. Located in the Trikuta Hills, it attracts millions for spiritual blessings and trekking.
                                </p>

                            </Card.Body>
                        </Card>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginLeft: '5rem', marginRight: '5rem', marginTop: '2rem' }}>

                        {/* Card 4 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/11974834/pexels-photo-11974834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Kedarnath</Card.Title>

                                <p style={{ fontWeight: "bold" }}>
                                    Kedarnath, in Uttarakhand, is a sacred Hindu temple dedicated to Lord Shiva. Nestled in the Himalayas, it's a key pilgrimage site, known for its stunning mountain views and challenging trek routes.
                                </p>

                            </Card.Body>
                        </Card>

                        {/* Card 5 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="data:image/jpeg;base64,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" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Somenath</Card.Title>

                                <p style={{ fontWeight: "bold" }}>
                                    Somnath Temple, in Gujarat, is an ancient and revered Hindu shrine dedicated to Lord Shiva. Known for its stunning architecture, it symbolizes resilience, spirituality, and India's rich cultural heritage.
                                </p>

                            </Card.Body>
                        </Card>

                        {/* Card 6 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/15017640/pexels-photo-15017640/free-photo-of-shree-badrinath-temple-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Badrinath</Card.Title>

                                <p style={{ fontWeight: "bold" }}>
                                    Badrinath, in Uttarakhand, is a sacred Hindu pilgrimage town dedicated to Lord Vishnu. Located in the Himalayas, it features the famous Badrinath Temple and is part of the Char Dham Yatra.
                                </p>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </section>

            <section id='Beach'>
                <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
                    <h1 style={{ textAlign: 'center' }}>Beaches</h1>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginLeft: '5rem', marginRight: '5rem' }}>


                        {/* Card 1 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_3_l_666_1000.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Goa</Card.Title>
                                <Card.Text>
                                    Goa is India’s beach paradise, known for its vibrant nightlife, beautiful beaches, Portuguese heritage, seafood, water sports, festivals, and relaxed vibe, attracting tourists worldwide year-round.
                                </Card.Text>

                            </Card.Body>
                        </Card>

                        {/* Card 2 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Digha_tv_destination_img_2_l_736_1256.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Digha</Card.Title>
                                <Card.Text>
                                    Dugha Beach is a peaceful coastal spot known for clean sandy shores, calm waters, scenic sunsets, local seafood stalls, and a relaxing atmosphere, ideal for nature lovers and quiet beach walks.
                                </Card.Text>

                            </Card.Body>
                        </Card>


                        {/* Card 3 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Lakshadweep</Card.Title>
                                <Card.Text>
                                    Lakshadweep beaches are pristine with white sands, clear turquoise waters, vibrant coral reefs, perfect for snorkeling, diving, and relaxing. They offer serene beauty, marine life, and peaceful island vibes.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>

                    <div style={{ display: 'flex', gap: '4.5rem', marginLeft: '5rem', marginRight: '5rem', marginTop: '2rem' }}>

                        {/* Card 4 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Alibaug_tv_destination_img_6_l_963_1712.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Alibaug</Card.Title>
                                <Card.Text>
                                    Alibaug Beach features black sand, Kolaba Fort nearby, water sports, calm waters, and stunning sunsets. It’s a popular, easily accessible weekend getaway from Mumbai with scenic coastal beauty.
                                </Card.Text>

                            </Card.Body>
                        </Card>


                        {/* Card 5 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_havelock_tv_destination_img_2_l_631_948.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Havelock Island</Card.Title>
                                <Card.Text>
                                    Havelock Island boasts pristine white beaches, clear blue waters, top snorkeling and diving, vibrant coral reefs, serene nature, famous Radhanagar Beach, and best visits from October to May.
                                </Card.Text>

                            </Card.Body>
                        </Card>


                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
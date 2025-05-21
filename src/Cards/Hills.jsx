
import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
        <>
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
        </>
    );
}

export default BasicExample;
import { FunctionComponent } from "react";
import { PAGES } from "../App";

interface PaginatorProps {
    page: PAGES;
}

const Paginator: FunctionComponent<PaginatorProps> = ({ page }) => {
    return (
        <main>
            {(() => {
                switch (page) {
                    case PAGES.ABOUT:
                        return <>about</>;
                    case PAGES.MAIN:
                        return (
                            <>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Excepturi adipisci quia cum
                                nobis voluptates dignissimos quos nesciunt
                                consectetur provident fugiat itaque accusantium
                                inventore tempora architecto praesentium saepe
                                laudantium, sit ipsam dolorum error.
                                Dignissimos, excepturi expedita. Pariatur,
                                necessitatibus laborum rerum eaque, ipsam earum
                                officia reprehenderit non at sapiente omnis
                                autem totam asperiores facilis maiores atque
                                sunt dolorem. Temporibus voluptas aut accusamus
                                incidunt voluptatibus modi animi iste culpa
                                quisquam veritatis ducimus nemo, pariatur sint
                                nostrum maxime dolor, labore quia rerum ullam.
                                Ullam architecto, ea cum modi in repellat
                                numquam amet, quasi voluptate ipsa distinctio!
                                Rerum omnis provident vel libero fugit labore
                                doloremque a optio odio quibusdam, dolore,
                                cupiditate quidem, sit doloribus totam eligendi?
                                Iure id possimus incidunt vel error enim
                                voluptate quas voluptates exercitationem nulla a
                                animi minima voluptas ducimus dolorem explicabo
                                obcaecati ratione, eius, quia repudiandae
                                repellat? Dolorem et rem sunt ad quod ipsum
                                vitae iusto atque ratione accusamus dicta
                                dolores tenetur dolore error possimus
                                consectetur quam, eveniet officiis cum dolor
                                voluptates eius, ea expedita. Minima,
                                reiciendis! Ipsa eligendi voluptate, quibusdam
                                aspernatur qui fuga error, sed vitae aut optio
                                facilis quis perspiciatis culpa distinctio
                                veniam voluptatem eos provident possimus quia
                                suscipit laudantium! Corporis necessitatibus
                                earum voluptatum ratione possimus animi, sint
                                excepturi rerum perferendis in culpa amet
                                deleniti distinctio eos est quod ipsam cumque.
                                Incidunt recusandae necessitatibus sapiente amet
                                accusamus omnis vitae eos sed tenetur
                                praesentium. Veritatis voluptates, nobis error
                                assumenda nesciunt quaerat doloribus dignissimos
                                harum aliquam eaque voluptatibus voluptatum
                                doloremque ipsa! Tempore minus pariatur
                                explicabo accusantium beatae ratione deserunt,
                                asperiores blanditiis? Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Quidem rem
                                numquam ut, adipisci accusantium, architecto
                                voluptates debitis velit quasi soluta est,
                                maiores vitae quod enim ullam facere inventore
                                dolores laborum dolore! Numquam veniam veritatis
                                quae nemo nostrum laboriosam aspernatur, earum
                                voluptas quisquam accusamus, modi eligendi?
                                Quidem pariatur at accusamus quae ipsam
                                aspernatur debitis odio ducimus ratione
                                suscipit, voluptate quo iusto perspiciatis amet
                                doloremque corrupti eveniet sed molestiae a,
                                earum magnam dolore nobis sint. Repellat
                                voluptates officia beatae quos odit quam esse
                                placeat repudiandae illum! Mollitia
                                necessitatibus totam at numquam recusandae!
                                Molestiae iure a doloremque id libero!
                                Repudiandae blanditiis autem iste nihil, porro
                                maxime in laboriosam dolores est quidem sed
                                dignissimos eius dicta mollitia natus ad. Odio
                                temporibus ea a rerum voluptas molestias officia
                                iusto officiis provident, id assumenda beatae
                                molestiae illum repudiandae eius omnis. Dolores,
                                laudantium molestiae iusto impedit quis nemo
                                consequuntur corrupti ad repellat nihil eveniet
                                maiores blanditiis libero explicabo beatae error
                                recusandae eaque veniam suscipit doloremque!
                                Dolore dolorem quasi soluta illo nemo tenetur!
                                Consequuntur dolorem qui totam quidem harum
                                laudantium, quibusdam nisi praesentium similique
                                neque natus ad tenetur illum! Incidunt totam ab
                                ut molestiae. Animi, quam id! Odio ducimus unde,
                                aut, harum deserunt soluta sit officiis, tempora
                                itaque molestias consequatur illum quibusdam
                                earum? A ea omnis illum quod enim voluptatum
                                saepe assumenda deserunt animi, dolorem rerum
                                laudantium, repudiandae cupiditate! Id nam
                                similique, accusamus enim, a maxime ipsa nisi
                                dignissimos facilis quidem ea corporis
                                praesentium voluptate eveniet pariatur est
                                doloribus ipsum possimus libero quibusdam,
                                veniam earum ratione fugiat! Aut?
                            </>
                        );
                    case PAGES.PROJECTS:
                        return <>projects</>;
                }
            })()}
        </main>
    );
};

export default Paginator;

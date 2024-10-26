import React, { useEffect } from "react";

const RPGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-[#010101] h-auto text-white font-Poppins relative">
        <main className="flex flex-col gap-28">
          <div className="text-center gap-8 flex flex-col ">
            <h1 className="text-3xl font-semibold mt-12">
              PRIME ROLEPLAY GUIDELINES
            </h1>
            <h2 className="text-lg lg:w-[800px] mx-auto  ">
              Welcome to Prime Roleplay! We’re thrilled to have you here! To
              make sure everyone has a great time, reading the community
              guidelines and following them is mandatory, violating these terms
              will result in a permanent suspension from the community.
            </h2>
          </div>
          <div className="flex justify-around  ">
            <div className=" flex flex-col  gap-4 w-fit  text-sm     ">
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer ">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Logic RP
                  </span>
                  Everything should stay within the roleplay based on common
                  logic relative to the character's status, wealth, and social
                  position in the community.
                  <span>
                    Example: A burger worker eligible for dirty business can rob
                    a shop to earn extra money, but the burger owner, due to
                    their wealth and social status, should not engage in
                    street-level crimes. Instead, they could participate in
                    high-stakes operations like money laundering
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Reason RP
                  </span>
                  Every action, legal or illegal, must be supported by a valid
                  reason grounded in common sense.
                  <span>
                    Example: A burger worker should not rob a wallet from
                    another player without a valid reason due to their social
                    and economic status. Conversely, a gang member might rob
                    someone in their territory to assert dominance or send a
                    message, but this should always be justified with a creative
                    and valid reason.
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Mere RP
                  </span>
                  Mere RP refers to low-level interactions based on primitive
                  motives like random robbing, killing, or vandalizing without
                  purpose.
                  <span>
                    Rule: Any form of mere RP not supported by valid reasons and
                    common logic will result in a severe ban. Ensure all actions
                    have a purpose and contribute meaningfully to the roleplay
                    narrative.
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Gradation RP
                  </span>
                  Characters should progress logically through their journey,
                  climbing the ladder step by step.
                  <span>
                    Rule: Jumping from low-level roles directly to high-stakes
                    crimes or major criminal roles is not acceptable. Build your
                    characterâ€™s story from small beginnings to larger, more
                    complex roles and actions, reflecting a natural progression.
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Fail RP
                  </span>
                  Failure to adhere to roleplay immersion or logic will be
                  penalized.
                  <span>
                    Rule: Any behavior that disrupts the roleplay world, such as
                    out-of-character (OOC) actions, meta-gaming, or
                    power-gaming, will result in a ban. Roleplay should be
                    consistent and uninterrupted by OOC elements.
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Force RP
                  </span>
                  Forcing actions or ideas onto other players is prohibited.
                  <span>
                    Rule: You cannot coerce other players into actions or
                    situations without a valid, roleplay-relevant reason. For
                    instance, a kidnapper cannot force a hostage to commit
                    suicide unless it is contextually justified and the
                    hostage's situation reflects this possibility. Law
                    enforcement cannot force a player to become a criminal
                    without clear evidence.
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Interaction RP
                  </span>
                  Roleplay scenes should be interactive and balanced, involving
                  mutual exchange.
                  <span>
                    Rule: When creating a scene, ensure that there is a
                    give-and-take dynamic. If you kidnap a group of people, you
                    must offer something in return or engage in a meaningful
                    interaction. The scene should involve negotiation or
                    exchange, rather than simply taking without giving.
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Involvement RP
                  </span>
                  When deciding to involve yourself in an ongoing scene, ensure
                  it is logical and well-planned.
                  <span>
                    Rule: Intervening in an ongoing scenes requires adherence to
                    three major rules: Logic RP (ensure your involvement makes
                    sense), Reason RP (have a valid reason for interference),
                    and Fear RP (acknowledge the risks involved). If these
                    conditions are not met, avoid intervening. This rule aims to
                    replace traditional third-party interference with more
                    thoughtful engagement.
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Fear RP
                  </span>
                  Characters should realistically react to threats and risks.
                  <span>
                    Rule: Plan your actions considering potential dangers. Avoid
                    scenarios where your character acts without regard for risk
                    or consequences, as this can lead to power gaming or
                    breaking the roleplay immersion.
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Assuming RP
                  </span>
                  This is a reminder that roleplay has no inherent limits if
                  logic and reason are respected.
                  <span>
                    Rule: In scenarios involving large-scale confrontations or
                    events, like a crew of 5 being ambushed by 25, ensure that
                    your response is balanced and realistic. The focus should be
                    on creative, logical, and fair roleplay, respecting the
                    overall narrative and balance of the game world.
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Lore RP
                  </span>
                  This is a reminder that the overal Lore needs to be respected.
                  <span>
                    Rule: Respect the established lore, and contribute to it
                    thoughtfully with your roleplay. You also need to evolve
                    your character story and create a meaningful and a creative
                    storyline for it
                  </span>
                </p>
              </div>
              <div className="flex items-center  lg:w-[1000px] group hover:cursor-pointer">
                <p className="flex flex-col w-auto ">
                  <span className="bg-[#131313] px-4 py-1 w-fit rounded-md font-semibold group-hover:text-black group-hover:bg-white ">
                    Toxicity
                  </span>
                  Any kind of toxicity in our outside the RP podium is severely
                  prohibited
                  <span>
                    Rule: Any kind of cheating, exploit bugs, massive insulting,
                    sexual harrassements, family or religious aggression or even
                    sexism will be treated as a permenant suspension from the
                    podium.
                  </span>
                </p>
              </div>
            </div>
            <div className=" w-[500px] flex items-center max-xl:hidden justify-around   ">
              <div className="flex flex-col gap-20">
                <img
                  src={
                    "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271122/6_d4mji6.png"
                  }
                  className="max-2xl:w-[400px] w-[500px] rounded-3xl rotate-6 brightness-75  outline outline-offset-1 outline-[#3d3d3d] "
                />
                <img
                  src={
                    "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729272773/metro_utz9e9.png"
                  }
                  className="max-2xl:w-[400px] w-[500px] rounded-3xl -rotate-6 brightness-75  outline outline-offset-1 outline-[#3d3d3d] "
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default RPGuide;

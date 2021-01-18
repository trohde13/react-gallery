CREATE TABLE "galleryItems" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(255),
	"description" text,
	"likes" INTEGER DEFAULT 0
);

INSERT INTO "galleryItems" ("path", "description")
VALUES ('images/Number7-JamesJoyce.jpg', 'Photo of the door for Number 7 at James Joyce Center. Dublin: September 2013'),
('images/CastleTrim.jpg', 'Photo of Castle Trim. Ireland: September 2013'),
('images/GDTatMia.jpg', 'Photo of the Angel of Death from the Guillermo del Toro art exhibit at Mia.'),
('images/BowieLastFiveYears.jpg', 'Photo of three images from the Bowie documentary: The Last Five years, with a quote.'),
('images/BowieRecord.jpg', 'Photo of Ziggy Stardust on the record player.'),
('images/QuestloveQuote.jpg', 'Photo of a quote from Creative Quest by Questlove'),
('images/It2014.jpg', 'Photo of It by Stephen King, with a quote from the book noted.'),
('images/Uffda.jpg', 'Photo of mugs at Caribou Coffee that say: Uffda.'),
('images/DessaMNOrch2018.jpg', 'Photo of Orchestra Hall: seeing Dessa play with the MN Orchestra for the 2nd time!'),
('images/TopNine2019.jpg', 'Photo of my Top 9 photos of 2019: so many great moments!'),
('images/ParisWedding2.jpg', 'Photo of my wife & I on a Paris street after getting married.'),
('images/ParisWedding1.jpg', 'Photo of my wife & I getting married on the Seine River with the Eifle Tower behind us. Paris: April, 2019.'),
('images/ParisRings.jpg', 'Photo of our hands, complete with wedding rings, over a Shakespeare & Company tote bag. Paris: April, 2019.'),
('images/Pompeii.jpg', 'Photo of my wife & I in Pompeii. Italy: April, 2019'),
('images/Rome1.jpg', 'Photo of me on a rainy sidestreet in Rome. Italy: April, 2019.'),
('images/Room217.jpg', 'Photo of Room 217 at the Stanley Hotel: inspiration for The Shining by Stephen King. Colorado: August, 2019'),
('images/Family1.jpg', 'Photo from 2019 of my wife & I with our 2 pups: Ava & Oscar.'),
('images/NewHouse1.jpg', 'Photo of my wife & I in front of our new house at the beginning of December.');

SELECT * FROM "galleryItems";

UPDATE "galleryItems"
SET "likes" = "likes" + 1
WHERE "id" = 1;
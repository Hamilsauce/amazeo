import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { csvToJson ,date, array, utils, text } = ham;

const ex = [
  {
  year: '',
  id: 'year',
  fips_idnumber: '',
  county_name: 'fips_number',
  judicial_circucounty_nameit: '',
  region: 'judicial_circuit',
  communityregion_type: '',
  percent_rural: 'community_type',
  population: 'percent_rural',
  admin: 'population',
  dui: 'admin',
  felonydui: '',
  misdemeanfelonyor: '',
  total: 'misdemeanor',
  traffic:total '',
  admin_ratetraffic: '',
  dui_rate: 'admin_rate',
  felony_ratedui_rate: '',
  misdemeanor_rafelony_ratete: '',
  total_rate: 'misdemeanor_rate',
  traffic_ratotal_ratete

},
  {
  year: '',
  id: 'year',
  fips_idnumber: '',
  county_name: 'fips_number',
  judicial_circucounty_nameit: '',
  region: 'judicial_circuit',
  communityregion_type: '',
  percent_rural: 'community_type',
  population: 'percent_rural',
  admin: 'population',
  dui: 'admin',
  felonydui: '',
  misdemeanfelonyor: '',
  total: 'misdemeanor',
  traffic:total '',
  admin_ratetraffic: '',
  dui_rate: 'admin_rate',
  felony_ratedui_rate: '',
  misdemeanor_rafelony_ratete: '',
  total_rate: 'misdemeanor_rate',
  traffic_ratotal_ratete

},
  {
  year: '',
  id: 'year',
  fips_idnumber: '',
  county_name: 'fips_number',
  judicial_circucounty_nameit: '',
  region: 'judicial_circuit',
  communityregion_type: '',
  percent_rural: 'community_type',
  population: 'percent_rural',
  admin: 'population',
  dui: 'admin',
  felonydui: '',
  misdemeanfelonyor: '',
  total: 'misdemeanor',
  traffic:total '',
  admin_ratetraffic: '',
  dui_rate: 'admin_rate',
  felony_ratedui_rate: '',
  misdemeanor_rafelony_ratete: '',
  total_rate: 'misdemeanor_rate',
  traffic_ratotal_ratete

},
]


const DATA_RAW = `
1982	4	7	Boone	17	Northern - Other	Mostly Urban	19.4
1982	18	35	Cumberland	5	Southern	Completely Rural	100													
1983	4	7	Boone	17	Northern - Other	Mostly Urban	19.4													
1983	18	35	Cumberland	5	Southern	Completely Rural	100													
1984	18	35	Cumberland	5	Southern	Completely Rural	100													
1985	18	35	Cumberland	5	Southern	Completely Rural	100													
1986	1	1	Adams	8	Central	Mostly Urban	32.6				154		287							
1986	2	3	Alexander	1	Southern	Mostly Rural	61.9				97		166							
1986	3	5	Bond	3	Southern	Mostly Rural	60.7				35		74							
1986	4	7	Boone	17	Northern - Other	Mostly Urban	19.4				71		142							
1986	5	9	Brown	8	Central	Mostly Urban	41.1													
1986	6	11	Bureau	13	Central	Mostly Rural	57.4				43		74							
1986	7	13	Calhoun	8	Southern	Completely Rural	100													
1986	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9				36		54							
1986	9	17	Cass	8	Central	Mostly Rural	52.1				31		146							
1986	10	19	Champaign	6	Central	Mostly Urban	12.7				327		511							
1986	11	21	Christian	4	Central	Mostly Urban	43.5				114		246							
1986	12	23	Clark	5	Southern	Mostly Rural	59.5				54		63							
1986	13	25	Clay	4	Southern	Mostly Rural	64.7				60		123							
1986	14	27	Clinton	4	Southern	Mostly Urban	48.8				37		159							
1986	15	29	Coles	5	Central	Mostly Urban	24.3				84		172							
1986	16	31	Cook	co	Northern - Cook	Completely Urban	0				15537		28888							
1986	17	33	Crawford	2	Southern	Mostly Rural	60.2				37		115							
1986	18	35	Cumberland	5	Southern	Completely Rural	100													
1986	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3				96		187							
1986	20	39	De Witt	6	Central	Mostly Urban	48.8				25		71							
1986	21	41	Douglas	6	Central	Mostly Rural	61.6				33		135							
1986	22	43	DuPage	18	Northern - Collar	Completely Urban	0				1424		2870							
1986	23	45	Edgar	5	Central	Mostly Rural	51.8				44		74							
1986	24	47	Edwards	2	Southern	Completely Rural	100				7		60							
1986	25	49	Effingham	4	Southern	Mostly Rural	59.7				52		149							
1986	26	51	Fayette	4	Southern	Mostly Rural	67				49		65							
1986	27	53	Ford	11	Central	Mostly Urban	41.8				45		131							
1986	28	55	Franklin	2	Southern	Mostly Urban	48.6				118		308							
1986	29	57	Fulton	9	Central	Mostly Rural	60				115		189							
1986	30	59	Gallatin	2	Southern	Completely Rural	100				27		44							
1986	31	61	Greene	7	Central	Mostly Rural	70.8				21		95							
1986	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4				31		50							
1986	33	65	Hamilton	2	Southern	Mostly Rural	68.1				16		39							
1986	34	67	Hancock	9	Central	Mostly Rural	71				39		50							
1986	35	69	Hardin	2	Southern	Completely Rural	100				9		26							
1986	36	71	Henderson	9	Central	Mostly Rural	99.7				9		13							
1986	37	73	Henry	14	Central	Mostly Rural	50.3				92		179							
1986	38	75	Iroquois	21	Central	Mostly Rural	71.7				66		110							
1986	39	77	Jackson	1	Southern	Mostly Urban	37.2				219		742							
1986	40	79	Jasper	4	Southern	Mostly Rural	69.9				19		74							
1986	41	81	Jefferson	2	Southern	Mostly Rural	58.8				135		227							
1986	42	83	Jersey	7	Southern	Mostly Rural	60.6				49		82							
1986	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6				15		109							
1986	44	87	Johnson	1	Southern	Completely Rural	100				15		31							
1986	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6				502		792							
1986	46	91	Kankakee	21	Central	Mostly Urban	24.5				196		207							
1986	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4				43		104							
1986	48	95	Knox	9	Central	Mostly Urban	24.3				143		216							
1986	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3				921		1375							
1986	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2				159		344							
1986	51	101	Lawrence	2	Southern	Mostly Rural	58				36		57							
1986	52	103	Lee	15	Northern - Other	Mostly Rural	53.2				109		199							
1986	53	105	Livingston	11	Central	Mostly Urban	40.8				70		112							
1986	54	107	Logan	11	Central	Mostly Urban	39.9				43		220							
1986	55	109	McDonough	9	Central	Mostly Urban	29.5				92		121							
1986	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9				259		595							
1986	57	113	McLean	11	Central	Mostly Urban	16.5				256		392							
1986	58	115	Macon	6	Central	Mostly Urban	15.3				211		415							
1986	59	117	Macoupin	7	Central	Mostly Rural	58.5				86		493							
1986	60	119	Madison	3	Southern	Mostly Urban	13.3				477		715							
1986	61	121	Marion	4	Southern	Mostly Urban	45.1				172		593							
1986	62	123	Marshall	10	Central	Completely Rural	100				52		194							
1986	63	125	Mason	8	Central	Mostly Rural	77.5				35		67							
1986	64	127	Massac	1	Southern	Mostly Rural	50.5				49		114							
1986	65	129	Menard	8	Central	Mostly Rural	75.7				20		59							
1986	66	131	Mercer	14	Central	Mostly Rural	77.8				14		42							
1986	67	133	Monroe	20	Southern	Mostly Urban	41.4				28		42							
1986	68	135	Montgomery	4	Central	Mostly Urban	41.6				62		111							
1986	69	137	Morgan	7	Central	Mostly Urban	36.2				60		274							
1986	70	139	Moultrie	6	Central	Mostly Rural	69.2				35		74							
1986	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1				76		182							
1986	72	143	Peoria	10	Central	Mostly Urban	14.6				562		1496							
1986	73	145	Perry	20	Southern	Mostly Urban	43.6				44		53							
1986	74	147	Piatt	6	Central	Mostly Rural	67.7				38		105							
1986	75	149	Pike	8	Central	Mostly Rural	72.3				30		69							
1986	76	151	Pope	1	Southern	Completely Rural	100				15		28							
1986	77	153	Pulaski	1	Southern	Completely Rural	100				35		53							
1986	78	155	Putnam	10	Central	Completely Rural	100													
1986	79	157	Randolph	20	Southern	Mostly Urban	42.6				50		88							
1986	80	159	Richland	2	Southern	Mostly Urban	43.5				45		90							
1986	81	161	Rock Island	14	Central	Mostly Urban	10.9				440		774							
1986	82	163	St. Clair	20	Southern	Mostly Urban	9.8				694		805							
1986	83	165	Saline	1	Southern	Mostly Urban	43.7				122		235							
1986	84	167	Sangamon	7	Central	Mostly Urban	14.1				372		618							
1986	85	169	Schuyler	8	Central	Mostly Rural	57.6				5		44							
1986	86	171	Scott	7	Central	Completely Rural	100				0		0							
1986	87	173	Shelby	4	Central	Mostly Rural	77.7				35		62							
1986	88	175	Stark	10	Central	Completely Rural	100													
1986	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1				132		317							
1986	90	179	Tazewell	10	Central	Mostly Urban	20.4				214		442							
1986	91	181	Union	1	Southern	Mostly Rural	65.9				44		128							
1986	92	183	Vermilion	5	Central	Mostly Urban	31.3				235		563							
1986	93	185	Wabash	2	Southern	Mostly Urban	38.9				27		64							
1986	94	187	Warren	9	Central	Mostly Urban	45.5				41		52							
1986	95	189	Washington	20	Southern	Mostly Rural	73.6				11		21							
1986	96	191	Wayne	2	Southern	Mostly Rural	69.9				43		89							
1986	97	193	White	2	Southern	Mostly Rural	62				64		109							
1986	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3				171		326							
1986	99	197	Will	12	Northern - Collar	Mostly Urban	3.9				564		629							
1986	100	199	Williamson	1	Southern	Mostly Urban	34.8				207		656							
1986	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9				512		2016							
1986	102	203	Woodford	11	Central	Mostly Rural	54.9				54		176							
1987	1	1	Adams	8	Central	Mostly Urban	32.6				177		309							
1987	2	3	Alexander	1	Southern	Mostly Rural	61.9				110		222							
1987	3	5	Bond	3	Southern	Mostly Rural	60.7				32		64							
1987	4	7	Boone	17	Northern - Other	Mostly Urban	19.4				77		136							
1987	5	9	Brown	8	Central	Mostly Urban	41.1													
1987	6	11	Bureau	13	Central	Mostly Rural	57.4				47		96							
1987	7	13	Calhoun	8	Southern	Completely Rural	100				17		49							
1987	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9				24		57							
1987	9	17	Cass	8	Central	Mostly Rural	52.1				25		157							
1987	10	19	Champaign	6	Central	Mostly Urban	12.7				383		565							
1987	11	21	Christian	4	Central	Mostly Urban	43.5				133		348							
1987	12	23	Clark	5	Southern	Mostly Rural	59.5				42		48							
1987	13	25	Clay	4	Southern	Mostly Rural	64.7				49		109							
1987	14	27	Clinton	4	Southern	Mostly Urban	48.8				55		156							
1987	15	29	Coles	5	Central	Mostly Urban	24.3				154		239							
1987	16	31	Cook	co	Northern - Cook	Completely Urban	0				16826		32392							
1987	17	33	Crawford	2	Southern	Mostly Rural	60.2				53		132							
1987	18	35	Cumberland	5	Southern	Completely Rural	100													
1987	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3				91		250							
1987	20	39	De Witt	6	Central	Mostly Urban	48.8				23		154							
1987	21	41	Douglas	6	Central	Mostly Rural	61.6				35		136							
1987	22	43	DuPage	18	Northern - Collar	Completely Urban	0				1490		2762							
1987	23	45	Edgar	5	Central	Mostly Rural	51.8				39		63							
1987	24	47	Edwards	2	Southern	Completely Rural	100				9		49							
1987	25	49	Effingham	4	Southern	Mostly Rural	59.7				45		149							
1987	26	51	Fayette	4	Southern	Mostly Rural	67				56		112							
1987	27	53	Ford	11	Central	Mostly Urban	41.8				55		137							
1987	28	55	Franklin	2	Southern	Mostly Urban	48.6				130		353							
1987	29	57	Fulton	9	Central	Mostly Rural	60				120		200							
1987	30	59	Gallatin	2	Southern	Completely Rural	100				33		60							
1987	31	61	Greene	7	Central	Mostly Rural	70.8				20		101							
1987	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4				31		50							
1987	33	65	Hamilton	2	Southern	Mostly Rural	68.1				15		35							
1987	34	67	Hancock	9	Central	Mostly Rural	71				44		53							
1987	35	69	Hardin	2	Southern	Completely Rural	100				9		33							
1987	36	71	Henderson	9	Central	Mostly Rural	99.7				11		15							
1987	37	73	Henry	14	Central	Mostly Rural	50.3				89		219							
1987	38	75	Iroquois	21	Central	Mostly Rural	71.7													
1987	39	77	Jackson	1	Southern	Mostly Urban	37.2				251		911							
1987	40	79	Jasper	4	Southern	Mostly Rural	69.9				19		79							
1987	41	81	Jefferson	2	Southern	Mostly Rural	58.8				158		287							
1987	42	83	Jersey	7	Southern	Mostly Rural	60.6				42		86							
1987	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6				18		120							
1987	44	87	Johnson	1	Southern	Completely Rural	100				20		51							
1987	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6				515		1006							
1987	46	91	Kankakee	21	Central	Mostly Urban	24.5				315		334							
1987	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4				50		112							
1987	48	95	Knox	9	Central	Mostly Urban	24.3				145		184							
1987	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3				1104		1460							
1987	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2				182		431							
1987	51	101	Lawrence	2	Southern	Mostly Rural	58				43		63							
1987	52	103	Lee	15	Northern - Other	Mostly Rural	53.2													
1987	53	105	Livingston	11	Central	Mostly Urban	40.8				80		144							
1987	54	107	Logan	11	Central	Mostly Urban	39.9				54		224							
1987	55	109	McDonough	9	Central	Mostly Urban	29.5				84		126							
1987	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9				359		622							
1987	57	113	McLean	11	Central	Mostly Urban	16.5				316		477							
1987	58	115	Macon	6	Central	Mostly Urban	15.3				241		340							
1987	59	117	Macoupin	7	Central	Mostly Rural	58.5				80		303							
1987	60	119	Madison	3	Southern	Mostly Urban	13.3				468		786							
1987	61	121	Marion	4	Southern	Mostly Urban	45.1				193		527							
1987	62	123	Marshall	10	Central	Completely Rural	100				95		499							
1987	63	125	Mason	8	Central	Mostly Rural	77.5				33		74							
1987	64	127	Massac	1	Southern	Mostly Rural	50.5				64		130							
1987	65	129	Menard	8	Central	Mostly Rural	75.7				0		0							
1987	66	131	Mercer	14	Central	Mostly Rural	77.8				18		37							
1987	67	133	Monroe	20	Southern	Mostly Urban	41.4				24		40							
1987	68	135	Montgomery	4	Central	Mostly Urban	41.6				69		135							
1987	69	137	Morgan	7	Central	Mostly Urban	36.2				62		237							
1987	70	139	Moultrie	6	Central	Mostly Rural	69.2				36		117							
1987	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1				81		174							
1987	72	143	Peoria	10	Central	Mostly Urban	14.6				550		1233							
1987	73	145	Perry	20	Southern	Mostly Urban	43.6				41		57							
1987	74	147	Piatt	6	Central	Mostly Rural	67.7				48		117							
1987	75	149	Pike	8	Central	Mostly Rural	72.3				25		49							
1987	76	151	Pope	1	Southern	Completely Rural	100				16		35							
1987	77	153	Pulaski	1	Southern	Completely Rural	100				43		49							
1987	78	155	Putnam	10	Central	Completely Rural	100													
1987	79	157	Randolph	20	Southern	Mostly Urban	42.6				41		67							
1987	80	159	Richland	2	Southern	Mostly Urban	43.5				24		50							
1987	81	161	Rock Island	14	Central	Mostly Urban	10.9				445		792							
1987	82	163	St. Clair	20	Southern	Mostly Urban	9.8				709		975							
1987	83	165	Saline	1	Southern	Mostly Urban	43.7				99		212							
1987	84	167	Sangamon	7	Central	Mostly Urban	14.1				379		748							
1987	85	169	Schuyler	8	Central	Mostly Rural	57.6				13		76							
1987	86	171	Scott	7	Central	Completely Rural	100				3		12							
1987	87	173	Shelby	4	Central	Mostly Rural	77.7				39		83							
1987	88	175	Stark	10	Central	Completely Rural	100													
1987	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1				145		334							
1987	90	179	Tazewell	10	Central	Mostly Urban	20.4				300		425							
1987	91	181	Union	1	Southern	Mostly Rural	65.9				26		62							
1987	92	183	Vermilion	5	Central	Mostly Urban	31.3				257		591							
1987	93	185	Wabash	2	Southern	Mostly Urban	38.9				38		92							
1987	94	187	Warren	9	Central	Mostly Urban	45.5				40		60							
1987	95	189	Washington	20	Southern	Mostly Rural	73.6				15		26							
1987	96	191	Wayne	2	Southern	Mostly Rural	69.9				36		108							
1987	97	193	White	2	Southern	Mostly Rural	62				69		105							
1987	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3				239		397							
1987	99	197	Will	12	Northern - Collar	Mostly Urban	3.9				607		676							
1987	100	199	Williamson	1	Southern	Mostly Urban	34.8				172		603							
1987	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9				587		2474							
1987	102	203	Woodford	11	Central	Mostly Rural	54.9				61		162							
1988	1	1	Adams	8	Central	Mostly Urban	32.6				210		308							
1988	2	3	Alexander	1	Southern	Mostly Rural	61.9				115		210							
1988	3	5	Bond	3	Southern	Mostly Rural	60.7				32		68							
1988	4	7	Boone	17	Northern - Other	Mostly Urban	19.4				90		314							
1988	5	9	Brown	8	Central	Mostly Urban	41.1				6		27							
1988	6	11	Bureau	13	Central	Mostly Rural	57.4				35		81							
1988	7	13	Calhoun	8	Southern	Completely Rural	100				15		64							
1988	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9				35		57							
1988	9	17	Cass	8	Central	Mostly Rural	52.1				24		187							
1988	10	19	Champaign	6	Central	Mostly Urban	12.7				417		639							
1988	11	21	Christian	4	Central	Mostly Urban	43.5				147		411							
1988	12	23	Clark	5	Southern	Mostly Rural	59.5				25		37							
1988	13	25	Clay	4	Southern	Mostly Rural	64.7				40		101							
1988	14	27	Clinton	4	Southern	Mostly Urban	48.8				67		157							
1988	15	29	Coles	5	Central	Mostly Urban	24.3				191		272							
1988	16	31	Cook	co	Northern - Cook	Completely Urban	0				16723		31049							
1988	17	33	Crawford	2	Southern	Mostly Rural	60.2				56		183							
1988	18	35	Cumberland	5	Southern	Completely Rural	100				0									
1988	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3				98		200							
1988	20	39	De Witt	6	Central	Mostly Urban	48.8				49		185							
1988	21	41	Douglas	6	Central	Mostly Rural	61.6				30		92							
1988	22	43	DuPage	18	Northern - Collar	Completely Urban	0				1409		2915							
1988	23	45	Edgar	5	Central	Mostly Rural	51.8				54		90							
1988	24	47	Edwards	2	Southern	Completely Rural	100				14		38							
1988	25	49	Effingham	4	Southern	Mostly Rural	59.7				61		187							
1988	26	51	Fayette	4	Southern	Mostly Rural	67				74		125							
1988	27	53	Ford	11	Central	Mostly Urban	41.8				41		113							
1988	28	55	Franklin	2	Southern	Mostly Urban	48.6				152		356							
1988	29	57	Fulton	9	Central	Mostly Rural	60				136		217							
1988	30	59	Gallatin	2	Southern	Completely Rural	100				40		63							
1988	31	61	Greene	7	Central	Mostly Rural	70.8				23		46							
1988	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4				23		41							
1988	33	65	Hamilton	2	Southern	Mostly Rural	68.1				12		37							
1988	34	67	Hancock	9	Central	Mostly Rural	71				32		36							
1988	35	69	Hardin	2	Southern	Completely Rural	100				8		45							
1988	36	71	Henderson	9	Central	Mostly Rural	99.7				13		20							
1988	37	73	Henry	14	Central	Mostly Rural	50.3				87		150							
1988	38	75	Iroquois	21	Central	Mostly Rural	71.7				112		133							
1988	39	77	Jackson	1	Southern	Mostly Urban	37.2				258		636							
1988	40	79	Jasper	4	Southern	Mostly Rural	69.9				25		66							
1988	41	81	Jefferson	2	Southern	Mostly Rural	58.8				177		312							
1988	42	83	Jersey	7	Southern	Mostly Rural	60.6				53		93							
1988	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6				17		169							
1988	44	87	Johnson	1	Southern	Completely Rural	100				26		56							
1988	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6				637		1216							
1988	46	91	Kankakee	21	Central	Mostly Urban	24.5				202		216							
1988	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4				53		132							
1988	48	95	Knox	9	Central	Mostly Urban	24.3				170		207							
1988	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3				1166		1860							
1988	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2				202		370							
1988	51	101	Lawrence	2	Southern	Mostly Rural	58				40		79							
1988	52	103	Lee	15	Northern - Other	Mostly Rural	53.2				161		333							
1988	53	105	Livingston	11	Central	Mostly Urban	40.8				76		125							
1988	54	107	Logan	11	Central	Mostly Urban	39.9				60		245							
1988	55	109	McDonough	9	Central	Mostly Urban	29.5				81		115							
1988	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9				339		622							
1988	57	113	McLean	11	Central	Mostly Urban	16.5				351		476							
1988	58	115	Macon	6	Central	Mostly Urban	15.3				306		412							
1988	59	117	Macoupin	7	Central	Mostly Rural	58.5				78		482							
1988	60	119	Madison	3	Southern	Mostly Urban	13.3				435		689							
1988	61	121	Marion	4	Southern	Mostly Urban	45.1				192		517							
1988	62	123	Marshall	10	Central	Completely Rural	100				0									
1988	63	125	Mason	8	Central	Mostly Rural	77.5				38		65							
1988	64	127	Massac	1	Southern	Mostly Rural	50.5				68		152							
1988	65	129	Menard	8	Central	Mostly Rural	75.7				15		54							
1988	66	131	Mercer	14	Central	Mostly Rural	77.8				28		59							
1988	67	133	Monroe	20	Southern	Mostly Urban	41.4				27		33							
1988	68	135	Montgomery	4	Central	Mostly Urban	41.6				96		166							
1988	69	137	Morgan	7	Central	Mostly Urban	36.2				78		223							
1988	70	139	Moultrie	6	Central	Mostly Rural	69.2				29		121							
1988	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1				91		216							
1988	72	143	Peoria	10	Central	Mostly Urban	14.6				547		1192							
1988	73	145	Perry	20	Southern	Mostly Urban	43.6				68		90							
1988	74	147	Piatt	6	Central	Mostly Rural	67.7				60		200							
1988	75	149	Pike	8	Central	Mostly Rural	72.3				42		67							
1988	76	151	Pope	1	Southern	Completely Rural	100				17		37							
1988	77	153	Pulaski	1	Southern	Completely Rural	100				61		73							
1988	78	155	Putnam	10	Central	Completely Rural	100				0		0							
1988	79	157	Randolph	20	Southern	Mostly Urban	42.6				37		80							
1988	80	159	Richland	2	Southern	Mostly Urban	43.5				31		79							
1988	81	161	Rock Island	14	Central	Mostly Urban	10.9				495		1423							
1988	82	163	St. Clair	20	Southern	Mostly Urban	9.8				724		973							
1988	83	165	Saline	1	Southern	Mostly Urban	43.7				80		148							
1988	84	167	Sangamon	7	Central	Mostly Urban	14.1				345		688							
1988	85	169	Schuyler	8	Central	Mostly Rural	57.6				10		44							
1988	86	171	Scott	7	Central	Completely Rural	100				0									
1988	87	173	Shelby	4	Central	Mostly Rural	77.7				38		93							
1988	88	175	Stark	10	Central	Completely Rural	100				0									
1988	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1				176		390							
1988	90	179	Tazewell	10	Central	Mostly Urban	20.4				292		419							
1988	91	181	Union	1	Southern	Mostly Rural	65.9				30		47							
1988	92	183	Vermilion	5	Central	Mostly Urban	31.3				257		475							
1988	93	185	Wabash	2	Southern	Mostly Urban	38.9				18		56							
1988	94	187	Warren	9	Central	Mostly Urban	45.5				54		66							
1988	95	189	Washington	20	Southern	Mostly Rural	73.6				21		37							
1988	96	191	Wayne	2	Southern	Mostly Rural	69.9				38		110							
1988	97	193	White	2	Southern	Mostly Rural	62				82		149							
1988	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3				303		444							
1988	99	197	Will	12	Northern - Collar	Mostly Urban	3.9				664		786							
1988	100	199	Williamson	1	Southern	Mostly Urban	34.8				160		452							
1988	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9				612		2359							
1988	102	203	Woodford	11	Central	Mostly Rural	54.9				73		116							
1989	1	1	Adams	8	Central	Mostly Urban	32.6				276		356							
1989	2	3	Alexander	1	Southern	Mostly Rural	61.9				88		199							
1989	3	5	Bond	3	Southern	Mostly Rural	60.7				31		65							
1989	4	7	Boone	17	Northern - Other	Mostly Urban	19.4				106		333							
1989	5	9	Brown	8	Central	Mostly Urban	41.1				10		28							
1989	6	11	Bureau	13	Central	Mostly Rural	57.4				30		68							
1989	7	13	Calhoun	8	Southern	Completely Rural	100				17		54							
1989	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9				42		63							
1989	9	17	Cass	8	Central	Mostly Rural	52.1				39		215							
1989	10	19	Champaign	6	Central	Mostly Urban	12.7				518		787							
1989	11	21	Christian	4	Central	Mostly Urban	43.5				253		524							
1989	12	23	Clark	5	Southern	Mostly Rural	59.5				26		33							
1989	13	25	Clay	4	Southern	Mostly Rural	64.7				50		175							
1989	14	27	Clinton	4	Southern	Mostly Urban	48.8				96		221							
1989	15	29	Coles	5	Central	Mostly Urban	24.3				169		285							
1989	16	31	Cook	co	Northern - Cook	Completely Urban	0				18384		33207							
1989	17	33	Crawford	2	Southern	Mostly Rural	60.2				64		140							
1989	18	35	Cumberland	5	Southern	Completely Rural	100				6		7							
1989	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3				129		206							
1989	20	39	De Witt	6	Central	Mostly Urban	48.8				51		183							
1989	21	41	Douglas	6	Central	Mostly Rural	61.6				36		125							
1989	22	43	DuPage	18	Northern - Collar	Completely Urban	0				1442		2845							
1989	23	45	Edgar	5	Central	Mostly Rural	51.8				57		78							
1989	24	47	Edwards	2	Southern	Completely Rural	100				8		37							
1989	25	49	Effingham	4	Southern	Mostly Rural	59.7				83		206							
1989	26	51	Fayette	4	Southern	Mostly Rural	67				66		105							
1989	27	53	Ford	11	Central	Mostly Urban	41.8				47		144							
1989	28	55	Franklin	2	Southern	Mostly Urban	48.6				143		372							
1989	29	57	Fulton	9	Central	Mostly Rural	60				133		222							
1989	30	59	Gallatin	2	Southern	Completely Rural	100				35		62							
1989	31	61	Greene	7	Central	Mostly Rural	70.8				23		72							
1989	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4				37		60							
1989	33	65	Hamilton	2	Southern	Mostly Rural	68.1				14		46							
1989	34	67	Hancock	9	Central	Mostly Rural	71				29		36							
1989	35	69	Hardin	2	Southern	Completely Rural	100				12		61							
1989	36	71	Henderson	9	Central	Mostly Rural	99.7				14		24							
1989	37	73	Henry	14	Central	Mostly Rural	50.3				91		140							
1989	38	75	Iroquois	21	Central	Mostly Rural	71.7				67		122							
1989	39	77	Jackson	1	Southern	Mostly Urban	37.2				233		501							
1989	40	79	Jasper	4	Southern	Mostly Rural	69.9				33		102							
1989	41	81	Jefferson	2	Southern	Mostly Rural	58.8				158		237							
1989	42	83	Jersey	7	Southern	Mostly Rural	60.6				78		133							
1989	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6				6		174							
1989	44	87	Johnson	1	Southern	Completely Rural	100				26		43							
1989	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6				873		1441							
1989	46	91	Kankakee	21	Central	Mostly Urban	24.5				247		264							
1989	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4				49		133							
1989	48	95	Knox	9	Central	Mostly Urban	24.3				188		224							
1989	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3				1321		1808							
1989	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2				269		384							
1989	51	101	Lawrence	2	Southern	Mostly Rural	58				54		72							
1989	52	103	Lee	15	Northern - Other	Mostly Rural	53.2				154		289							
1989	53	105	Livingston	11	Central	Mostly Urban	40.8				78		135							
1989	54	107	Logan	11	Central	Mostly Urban	39.9				53		269							
1989	55	109	McDonough	9	Central	Mostly Urban	29.5				70		98							
1989	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9				368		587							
1989	57	113	McLean	11	Central	Mostly Urban	16.5				377		453							
1989	58	115	Macon	6	Central	Mostly Urban	15.3				325		444							
1989	59	117	Macoupin	7	Central	Mostly Rural	58.5				84		520							
1989	60	119	Madison	3	Southern	Mostly Urban	13.3				468		687							
1989	61	121	Marion	4	Southern	Mostly Urban	45.1				250		644							
1989	62	123	Marshall	10	Central	Completely Rural	100				42		174							
1989	63	125	Mason	8	Central	Mostly Rural	77.5				46		81							
1989	64	127	Massac	1	Southern	Mostly Rural	50.5				62		128							
1989	65	129	Menard	8	Central	Mostly Rural	75.7				26		43							
1989	66	131	Mercer	14	Central	Mostly Rural	77.8				30		52							
1989	67	133	Monroe	20	Southern	Mostly Urban	41.4				29		35							
1989	68	135	Montgomery	4	Central	Mostly Urban	41.6				69		113							
1989	69	137	Morgan	7	Central	Mostly Urban	36.2				93		327							
1989	70	139	Moultrie	6	Central	Mostly Rural	69.2				49		156							
1989	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1				108		195							
1989	72	143	Peoria	10	Central	Mostly Urban	14.6				577		1331							
1989	73	145	Perry	20	Southern	Mostly Urban	43.6				67		99							
1989	74	147	Piatt	6	Central	Mostly Rural	67.7				26		46							
1989	75	149	Pike	8	Central	Mostly Rural	72.3				55		100							
1989	76	151	Pope	1	Southern	Completely Rural	100				14		30							
1989	77	153	Pulaski	1	Southern	Completely Rural	100				53		93							
1989	78	155	Putnam	10	Central	Completely Rural	100				19		50							
1989	79	157	Randolph	20	Southern	Mostly Urban	42.6				59		110							
1989	80	159	Richland	2	Southern	Mostly Urban	43.5				51		123							
1989	81	161	Rock Island	14	Central	Mostly Urban	10.9				659		806							
1989	82	163	St. Clair	20	Southern	Mostly Urban	9.8				732		1098							
1989	83	165	Saline	1	Southern	Mostly Urban	43.7				72		148							
1989	84	167	Sangamon	7	Central	Mostly Urban	14.1				424		711							
1989	85	169	Schuyler	8	Central	Mostly Rural	57.6				11		40							
1989	86	171	Scott	7	Central	Completely Rural	100				8		18							
1989	87	173	Shelby	4	Central	Mostly Rural	77.7				52		91							
1989	88	175	Stark	10	Central	Completely Rural	100				16		73							
1989	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1				152		336							
1989	90	179	Tazewell	10	Central	Mostly Urban	20.4				265		427							
1989	91	181	Union	1	Southern	Mostly Rural	65.9				28		52							
1989	92	183	Vermilion	5	Central	Mostly Urban	31.3				239		483							
1989	93	185	Wabash	2	Southern	Mostly Urban	38.9				15		42							
1989	94	187	Warren	9	Central	Mostly Urban	45.5				68		84							
1989	95	189	Washington	20	Southern	Mostly Rural	73.6				26		36							
1989	96	191	Wayne	2	Southern	Mostly Rural	69.9				49		108							
1989	97	193	White	2	Southern	Mostly Rural	62				67		146							
1989	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3				295		440							
1989	99	197	Will	12	Northern - Collar	Mostly Urban	3.9				751		802							
1989	100	199	Williamson	1	Southern	Mostly Urban	34.8				163		364							
1989	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9				720		2624							
1989	102	203	Woodford	11	Central	Mostly Rural	54.9				45		91							
1990	1	1	Adams	8	Central	Mostly Urban	32.6	82137			303		367				368.9		446.8	
1990	2	3	Alexander	1	Southern	Mostly Rural	61.9	13452			133		246				988.7		1828.7	
1990	3	5	Bond	3	Southern	Mostly Rural	60.7	18508			42		76				226.9		410.6	
1990	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	39104			128		386				327.3		987.1	
1990	5	9	Brown	8	Central	Mostly Urban	41.1	7057			11		29				155.9		410.9	
1990	6	11	Bureau	13	Central	Mostly Rural	57.4	44529			42		114				94.3		256	
1990	7	13	Calhoun	8	Southern	Completely Rural	100	6549			27		55				412.3		839.8	
1990	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20748			45		74				216.9		356.7	
1990	9	17	Cass	8	Central	Mostly Rural	52.1	16688			41		153				245.7		916.8	
1990	10	19	Champaign	6	Central	Mostly Urban	12.7	209060			488		700				233.4		334.8	
1990	11	21	Christian	4	Central	Mostly Urban	43.5	42614			152		317				356.7		743.9	
1990	12	23	Clark	5	Southern	Mostly Rural	59.5	19618			22		28				112.1		142.7	
1990	13	25	Clay	4	Southern	Mostly Rural	64.7	17935			73		183				407		1020.4	
1990	14	27	Clinton	4	Southern	Mostly Urban	48.8	42556			103		243				242		571	
1990	15	29	Coles	5	Central	Mostly Urban	24.3	61715			174		304				281.9		492.6	
1990	16	31	Cook	co	Northern - Cook	Completely Urban	0	6315887			20521		35877				324.9		568	
1990	17	33	Crawford	2	Southern	Mostly Rural	60.2	23887			45		102				188.4		427	
1990	18	35	Cumberland	5	Southern	Completely Rural	100	13512			6		9				44.4		66.6	
1990	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	94158			139		241				147.6		256	
1990	20	39	De Witt	6	Central	Mostly Urban	48.8	20553			38		132				184.9		642.2	
1990	21	41	Douglas	6	Central	Mostly Rural	61.6	24630			34		130				138		527.8	
1990	22	43	DuPage	18	Northern - Collar	Completely Urban	0	981841			1690		3320				172.1		338.1	
1990	23	45	Edgar	5	Central	Mostly Rural	51.8	24219			74		106				305.5		437.7	
1990	24	47	Edwards	2	Southern	Completely Rural	100	9133			20		41				219		448.9	
1990	25	49	Effingham	4	Southern	Mostly Rural	59.7	40808			112		248				274.5		607.7	
1990	26	51	Fayette	4	Southern	Mostly Rural	67	25786			81		123				314.1		477	
1990	27	53	Ford	11	Central	Mostly Urban	41.8	17716			47		209				265.3		1179.7	
1990	28	55	Franklin	2	Southern	Mostly Urban	48.6	49227			166		395				337.2		802.4	
1990	29	57	Fulton	9	Central	Mostly Rural	60	46780			150		246				320.6		525.9	
1990	30	59	Gallatin	2	Southern	Completely Rural	100	8407			38		61				452		725.6	
1990	31	61	Greene	7	Central	Mostly Rural	70.8	19126			22		75				115		392.1	
1990	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	40933			58		75				141.7		183.2	
1990	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10413			8		38				76.8		364.9	
1990	34	67	Hancock	9	Central	Mostly Rural	71	26494			24		34				90.6		128.3	
1990	35	69	Hardin	2	Southern	Completely Rural	100	6325			17		56				268.8		885.4	
1990	36	71	Henderson	9	Central	Mostly Rural	99.7	9998			13		19				130		190	
1990	37	73	Henry	14	Central	Mostly Rural	50.3	63974			100		186				156.3		290.7	
1990	38	75	Iroquois	21	Central	Mostly Rural	71.7	38267			90		125				235.2		326.7	
1990	39	77	Jackson	1	Southern	Mostly Urban	37.2	72011			235		501				326.3		695.7	
1990	40	79	Jasper	4	Southern	Mostly Rural	69.9	13435			36		102				268		759.2	
1990	41	81	Jefferson	2	Southern	Mostly Rural	58.8	46453			142		248				305.7		533.9	
1990	42	83	Jersey	7	Southern	Mostly Rural	60.6	25726			84		158				326.5		614.2	
1990	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27133			30		268				110.6		987.7	
1990	44	87	Johnson	1	Southern	Completely Rural	100	13404			20		43				149.2		320.8	
1990	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	409448			1038		1562				253.5		381.5	
1990	46	91	Kankakee	21	Central	Mostly Urban	24.5	122112			284		307				232.6		251.4	
1990	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	50589			49		121				96.9		239.2	
1990	48	95	Knox	9	Central	Mostly Urban	24.3	68968			194		242				281.3		350.9	
1990	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	656147			1447		1984				220.5		302.4	
1990	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	132690			288		425				217		320.3	
1990	51	101	Lawrence	2	Southern	Mostly Rural	58	19487			60		81				307.9		415.7	
1990	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	42889			175		326				408		760.1	
1990	53	105	Livingston	11	Central	Mostly Urban	40.8	48594			106		154				218.1		316.9	
1990	54	107	Logan	11	Central	Mostly Urban	39.9	37653			80		394				212.5		1046.4	
1990	55	109	McDonough	9	Central	Mostly Urban	29.5	41256			70		101				169.7		244.8	
1990	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	236470			358		567				151.4		239.8	
1990	57	113	McLean	11	Central	Mostly Urban	16.5	158031			386		492				244.3		311.3	
1990	58	115	Macon	6	Central	Mostly Urban	15.3	145839			340		430				233.1		294.8	
1990	59	117	Macoupin	7	Central	Mostly Rural	58.5	59241			90		547				151.9		923.3	
1990	60	119	Madison	3	Southern	Mostly Urban	13.3	309740			528		751				170.5		242.5	
1990	61	121	Marion	4	Southern	Mostly Urban	45.1	51986			266		701				511.7		1348.4	
1990	62	123	Marshall	10	Central	Completely Rural	100	15900			44		116				276.7		729.6	
1990	63	125	Mason	8	Central	Mostly Rural	77.5	20257			46		85				227.1		419.6	
1990	64	127	Massac	1	Southern	Mostly Rural	50.5	18066			62		149				343.2		824.8	
1990	65	129	Menard	8	Central	Mostly Rural	75.7	14009			30		69				214.1		492.5	
1990	66	131	Mercer	14	Central	Mostly Rural	77.8	21565			42		71				194.8		329.2	
1990	67	133	Monroe	20	Southern	Mostly Urban	41.4	28281			31		45				109.6		159.1	
1990	68	135	Montgomery	4	Central	Mostly Urban	41.6	37995			85		242				223.7		636.9	
1990	69	137	Morgan	7	Central	Mostly Urban	36.2	44791			82		257				183.1		573.8	
1990	70	139	Moultrie	6	Central	Mostly Rural	69.2	17412			48		172				275.7		987.8	
1990	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	57971			127		207				219.1		357.1	
1990	72	143	Peoria	10	Central	Mostly Urban	14.6	227878			685		1019				300.6		447.2	
1990	73	145	Perry	20	Southern	Mostly Urban	43.6	26704			89		126				333.3		471.8	
1990	74	147	Piatt	6	Central	Mostly Rural	67.7	19284			21		60				108.9		311.1	
1990	75	149	Pike	8	Central	Mostly Rural	72.3	21656			57		113				263.2		521.8	
1990	76	151	Pope	1	Southern	Completely Rural	100	5251			13		22				247.6		419	
1990	77	153	Pulaski	1	Southern	Completely Rural	100	9584			56		91				584.3		949.5	
1990	78	155	Putnam	10	Central	Completely Rural	100	7156			15		40				209.6		559	
1990	79	157	Randolph	20	Southern	Mostly Urban	42.6	42347			69		104				162.9		245.6	
1990	80	159	Richland	2	Southern	Mostly Urban	43.5	20559			53		140				257.8		681	
1990	81	161	Rock Island	14	Central	Mostly Urban	10.9	184243			788		931				427.7		505.3	
1990	82	163	St. Clair	20	Southern	Mostly Urban	9.8	332908			982		1318				295		395.9	
1990	83	165	Saline	1	Southern	Mostly Urban	43.7	32451			101		223				311.2		687.2	
1990	84	167	Sangamon	7	Central	Mostly Urban	14.1	221799			490		796				220.9		358.9	
1990	85	169	Schuyler	8	Central	Mostly Rural	57.6	9255			9		24				97.2		259.3	
1990	86	171	Scott	7	Central	Completely Rural	100	7023			2		7				28.5		99.7	
1990	87	173	Shelby	4	Central	Mostly Rural	77.7	27724			55		93				198.4		335.4	
1990	88	175	Stark	10	Central	Completely Rural	100	8113			23		84				283.5		1035.4	
1990	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	59755			176		319				294.5		533.8	
1990	90	179	Tazewell	10	Central	Mostly Urban	20.4	154527			299		385				193.5		249.1	
1990	91	181	Union	1	Southern	Mostly Rural	65.9	21431			46		112				214.6		522.6	
1990	92	183	Vermilion	5	Central	Mostly Urban	31.3	109536			318		554				290.3		505.8	
1990	93	185	Wabash	2	Southern	Mostly Urban	38.9	16305			45		75				276		460	
1990	94	187	Warren	9	Central	Mostly Urban	45.5	23814			62		90				260.4		377.9	
1990	95	189	Washington	20	Southern	Mostly Rural	73.6	18688			26		52				139.1		278.3	
1990	96	191	Wayne	2	Southern	Mostly Rural	69.9	21169			54		99				255.1		467.7	
1990	97	193	White	2	Southern	Mostly Rural	62	20126			54		146				268.3		725.4	
1990	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	75259			342		511				454.4		679	
1990	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	460344			741		793				161		172.3	
1990	100	199	Williamson	1	Southern	Mostly Urban	34.8	70646			165		330				233.6		467.1	
1990	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	316279			878		3369				277.6		1065.2	
1990	102	203	Woodford	11	Central	Mostly Rural	54.9	41722			49		98				117.4		234.9	
1991	1	1	Adams	8	Central	Mostly Urban	32.6	82928			267		352				322		424.5	
1991	2	3	Alexander	1	Southern	Mostly Rural	61.9	13377			120		176				897.1		1315.7	
1991	3	5	Bond	3	Southern	Mostly Rural	60.7	18670			43		77				230.3		412.4	
1991	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	40275			151		420				374.9		1042.8	
1991	5	9	Brown	8	Central	Mostly Urban	41.1	7395			11		29				148.7		392.2	
1991	6	11	Bureau	13	Central	Mostly Rural	57.4	44565			40		112				89.8		251.3	
1991	7	13	Calhoun	8	Southern	Completely Rural	100	6515			28		64				429.8		982.3	
1991	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20564			34		59				165.3		286.9	
1991	9	17	Cass	8	Central	Mostly Rural	52.1	16774			50		120				298.1		715.4	
1991	10	19	Champaign	6	Central	Mostly Urban	12.7	211715			525		780				248		368.4	
1991	11	21	Christian	4	Central	Mostly Urban	43.5	43258			163		311				376.8		718.9	
1991	12	23	Clark	5	Southern	Mostly Rural	59.5	19656			35		50				178.1		254.4	
1991	13	25	Clay	4	Southern	Mostly Rural	64.7	18032			54		177				299.5		981.6	
1991	14	27	Clinton	4	Southern	Mostly Urban	48.8	42658			75		181				175.8		424.3	
1991	15	29	Coles	5	Central	Mostly Urban	24.3	62006			182		369				293.5		595.1	
1991	16	31	Cook	co	Northern - Cook	Completely Urban	0	6377689			21069		36807				330.4		577.1	
1991	17	33	Crawford	2	Southern	Mostly Rural	60.2	24575			47		140				191.3		569.7	
1991	18	35	Cumberland	5	Southern	Completely Rural	100	13603			10		11				73.5		80.9	
1991	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	95803			152		273				158.7		285	
1991	20	39	De Witt	6	Central	Mostly Urban	48.8	20632			43		112				208.4		542.8	
1991	21	41	Douglas	6	Central	Mostly Rural	61.6	24642			42		133				170.4		539.7	
1991	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1003115			1966		3918				196		390.6	
1991	23	45	Edgar	5	Central	Mostly Rural	51.8	24155			101		136				418.1		563	
1991	24	47	Edwards	2	Southern	Completely Rural	100	9116			24		52				263.3		570.4	
1991	25	49	Effingham	4	Southern	Mostly Rural	59.7	41050			143		283				348.4		689.4	
1991	26	51	Fayette	4	Southern	Mostly Rural	67	25613			104		140				406		546.6	
1991	27	53	Ford	11	Central	Mostly Urban	41.8	17527			41		185				233.9		1055.5	
1991	28	55	Franklin	2	Southern	Mostly Urban	48.6	49029			175		340				356.9		693.5	
1991	29	57	Fulton	9	Central	Mostly Rural	60	46854			163		274				347.9		584.8	
1991	30	59	Gallatin	2	Southern	Completely Rural	100	8280			32		58				386.5		700.5	
1991	31	61	Greene	7	Central	Mostly Rural	70.8	18948			28		67				147.8		353.6	
1991	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	41921			65		89				155.1		212.3	
1991	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10403			13		51				125		490.2	
1991	34	67	Hancock	9	Central	Mostly Rural	71	26511			28		43				105.6		162.2	
1991	35	69	Hardin	2	Southern	Completely Rural	100	6241			16		57				256.4		913.3	
1991	36	71	Henderson	9	Central	Mostly Rural	99.7	10033			7		16				69.8		159.5	
1991	37	73	Henry	14	Central	Mostly Rural	50.3	63887			87		143				136.2		223.8	
1991	38	75	Iroquois	21	Central	Mostly Rural	71.7	38475			89		136				231.3		353.5	
1991	39	77	Jackson	1	Southern	Mostly Urban	37.2	71654			335		659				467.5		919.7	
1991	40	79	Jasper	4	Southern	Mostly Rural	69.9	13380			40		93				299		695.1	
1991	41	81	Jefferson	2	Southern	Mostly Rural	58.8	46574			168		305				360.7		654.9	
1991	42	83	Jersey	7	Southern	Mostly Rural	60.6	26023			60		130				230.6		499.6	
1991	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27374			43		216				157.1		789.1	
1991	44	87	Johnson	1	Southern	Completely Rural	100	13580			23		40				169.4		294.6	
1991	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	418160			1140		1560				272.6		373.1	
1991	46	91	Kankakee	21	Central	Mostly Urban	24.5	123582			302		319				244.4		258.1	
1991	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	51661			71		151				137.4		292.3	
1991	48	95	Knox	9	Central	Mostly Urban	24.3	69019			195		259				282.5		375.3	
1991	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	673375			1418		1894				210.6		281.3	
1991	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	133466			282		446				211.3		334.2	
1991	51	101	Lawrence	2	Southern	Mostly Rural	58	19610			61		99				311.1		504.8	
1991	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43180			174		301				403		697.1	
1991	53	105	Livingston	11	Central	Mostly Urban	40.8	48440			112		165				231.2		340.6	
1991	54	107	Logan	11	Central	Mostly Urban	39.9	37601			68		406				180.8		1079.8	
1991	55	109	McDonough	9	Central	Mostly Urban	29.5	41128			59		99				143.5		240.7	
1991	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	247291			342		562				138.3		227.3	
1991	57	113	McLean	11	Central	Mostly Urban	16.5	161386			440		591				272.6		366.2	
1991	58	115	Macon	6	Central	Mostly Urban	15.3	146916			357		480				243		326.7	
1991	59	117	Macoupin	7	Central	Mostly Rural	58.5	59566			93		539				156.1		904.9	
1991	60	119	Madison	3	Southern	Mostly Urban	13.3	312710			647		860				206.9		275	
1991	61	121	Marion	4	Southern	Mostly Urban	45.1	51975			258		680				496.4		1308.3	
1991	62	123	Marshall	10	Central	Completely Rural	100	15854			67		131				422.6		826.3	
1991	63	125	Mason	8	Central	Mostly Rural	77.5	20354			69		102				339		501.1	
1991	64	127	Massac	1	Southern	Mostly Rural	50.5	18084			85		175				470		967.7	
1991	65	129	Menard	8	Central	Mostly Rural	75.7	14133			34		78				240.6		551.9	
1991	66	131	Mercer	14	Central	Mostly Rural	77.8	21510			53		78				246.4		362.6	
1991	67	133	Monroe	20	Southern	Mostly Urban	41.4	28864			34		42				117.8		145.5	
1991	68	135	Montgomery	4	Central	Mostly Urban	41.6	38053			84		290				220.7		762.1	
1991	69	137	Morgan	7	Central	Mostly Urban	36.2	44998			93		286				206.7		635.6	
1991	70	139	Moultrie	6	Central	Mostly Rural	69.2	17380			29		109				166.9		627.2	
1991	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	59115			124		228				209.8		385.7	
1991	72	143	Peoria	10	Central	Mostly Urban	14.6	229640			797		3308				347.1		1440.5	
1991	73	145	Perry	20	Southern	Mostly Urban	43.6	26658			108		131				405.1		491.4	
1991	74	147	Piatt	6	Central	Mostly Rural	67.7	19371			21		41				108.4		211.7	
1991	75	149	Pike	8	Central	Mostly Rural	72.3	21564			53		109				245.8		505.5	
1991	76	151	Pope	1	Southern	Completely Rural	100	5301			16		36				301.8		679.1	
1991	77	153	Pulaski	1	Southern	Completely Rural	100	9520			72		156				756.3		1638.7	
1991	78	155	Putnam	10	Central	Completely Rural	100	7199			26		79				361.2		1097.4	
1991	79	157	Randolph	20	Southern	Mostly Urban	42.6	42329			94		125				222.1		295.3	
1991	80	159	Richland	2	Southern	Mostly Urban	43.5	20618			42		133				203.7		645.1	
1991	81	161	Rock Island	14	Central	Mostly Urban	10.9	185406			937		1038				505.4		559.9	
1991	82	163	St. Clair	20	Southern	Mostly Urban	9.8	332269			1101		1409				331.4		424.1	
1991	83	165	Saline	1	Southern	Mostly Urban	43.7	32456			103		174				317.4		536.1	
1991	84	167	Sangamon	7	Central	Mostly Urban	14.1	225356			552		833				244.9		369.6	
1991	85	169	Schuyler	8	Central	Mostly Rural	57.6	9260			15		43				162		464.4	
1991	86	171	Scott	7	Central	Completely Rural	100	6956			0		5				0		71.9	
1991	87	173	Shelby	4	Central	Mostly Rural	77.7	27836			48		93				172.4		334.1	
1991	88	175	Stark	10	Central	Completely Rural	100	8020			30		114				374.1		1421.4	
1991	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	60003			214		358				356.6		596.6	
1991	90	179	Tazewell	10	Central	Mostly Urban	20.4	155345			326		452				209.9		291	
1991	91	181	Union	1	Southern	Mostly Rural	65.9	21559			57		191				264.4		885.9	
1991	92	183	Vermilion	5	Central	Mostly Urban	31.3	109431			365		579				333.5		529.1	
1991	93	185	Wabash	2	Southern	Mostly Urban	38.9	16381			43		90				262.5		549.4	
1991	94	187	Warren	9	Central	Mostly Urban	45.5	23886			40		88				167.5		368.4	
1991	95	189	Washington	20	Southern	Mostly Rural	73.6	18563			27		43				145.5		231.6	
1991	96	191	Wayne	2	Southern	Mostly Rural	69.9	20935			51		112				243.6		535	
1991	97	193	White	2	Southern	Mostly Rural	62	19980			44		118				220.2		590.6	
1991	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	75815			372		546				490.7		720.2	
1991	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	472030			744		808				157.6		171.2	
1991	100	199	Williamson	1	Southern	Mostly Urban	34.8	70919			193		440				272.1		620.4	
1991	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	322368			1076		3922				333.8		1216.6	
1991	102	203	Woodford	11	Central	Mostly Rural	54.9	42436			64		158				150.8		372.3	
1992	1	1	Adams	8	Central	Mostly Urban	32.6	83187			230		308				276.5		370.3	
1992	2	3	Alexander	1	Southern	Mostly Rural	61.9	13287			129		187				970.9		1407.4	
1992	3	5	Bond	3	Southern	Mostly Rural	60.7	18772			63		91				335.6		484.8	
1992	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	41725			135		352				323.5		843.6	
1992	5	9	Brown	8	Central	Mostly Urban	41.1	7452			11		31				147.6		416	
1992	6	11	Bureau	13	Central	Mostly Rural	57.4	44556			41		103				92		231.2	
1992	7	13	Calhoun	8	Southern	Completely Rural	100	6423			24		64				373.7		996.4	
1992	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20518			45		62				219.3		302.2	
1992	9	17	Cass	8	Central	Mostly Rural	52.1	16684			36		80				215.8		479.5	
1992	10	19	Champaign	6	Central	Mostly Urban	12.7	214875			446		632				207.6		294.1	
1992	11	21	Christian	4	Central	Mostly Urban	43.5	43558			100		287				229.6		658.9	
1992	12	23	Clark	5	Southern	Mostly Rural	59.5	19852			42		52				211.6		261.9	
1992	13	25	Clay	4	Southern	Mostly Rural	64.7	17891			51		192				285.1		1073.2	
1992	14	27	Clinton	4	Southern	Mostly Urban	48.8	42882			78		196				181.9		457.1	
1992	15	29	Coles	5	Central	Mostly Urban	24.3	62712			234		444				373.1		708	
1992	16	31	Cook	co	Northern - Cook	Completely Urban	0	6449063			25900		39935				401.6		619.2	
1992	17	33	Crawford	2	Southern	Mostly Rural	60.2	25060			21		65				83.8		259.4	
1992	18	35	Cumberland	5	Southern	Completely Rural	100	13662												
1992	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	96956			194		317				200.1		327	
1992	20	39	De Witt	6	Central	Mostly Urban	48.8	20713			61		173				294.5		835.2	
1992	21	41	Douglas	6	Central	Mostly Rural	61.6	24615			39		134				158.4		544.4	
1992	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1021477			1526		3058				149.4		299.4	
1992	23	45	Edgar	5	Central	Mostly Rural	51.8	24141			116		141				480.5		584.1	
1992	24	47	Edwards	2	Southern	Completely Rural	100	9085			14		42				154.1		462.3	
1992	25	49	Effingham	4	Southern	Mostly Rural	59.7	41259			154		307				373.3		744.1	
1992	26	51	Fayette	4	Southern	Mostly Rural	67	25699			119		185				463.1		719.9	
1992	27	53	Ford	11	Central	Mostly Urban	41.8	17497			42		180				240		1028.7	
1992	28	55	Franklin	2	Southern	Mostly Urban	48.6	48759			212		373				434.8		765	
1992	29	57	Fulton	9	Central	Mostly Rural	60	47005			155		283				329.8		602.1	
1992	30	59	Gallatin	2	Southern	Completely Rural	100	8259			31		53				375.3		641.7	
1992	31	61	Greene	7	Central	Mostly Rural	70.8	18830			29		71				154		377.1	
1992	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	42530			60		87				141.1		204.6	
1992	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10393			14		54				134.7		519.6	
1992	34	67	Hancock	9	Central	Mostly Rural	71	26606			46		61				172.9		229.3	
1992	35	69	Hardin	2	Southern	Completely Rural	100	6312			22		67				348.5		1061.5	
1992	36	71	Henderson	9	Central	Mostly Rural	99.7	10149			15		19				147.8		187.2	
1992	37	73	Henry	14	Central	Mostly Rural	50.3	63955			72		123				112.6		192.3	
1992	38	75	Iroquois	21	Central	Mostly Rural	71.7	38822			92		184				237		474	
1992	39	77	Jackson	1	Southern	Mostly Urban	37.2	72195			502		843				695.3		1167.7	
1992	40	79	Jasper	4	Southern	Mostly Rural	69.9	13320			47		89				352.9		668.2	
1992	41	81	Jefferson	2	Southern	Mostly Rural	58.8	46698			134		295				287		631.7	
1992	42	83	Jersey	7	Southern	Mostly Rural	60.6	26238			53		122				202		465	
1992	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27268			32		178				117.4		652.8	
1992	44	87	Johnson	1	Southern	Completely Rural	100	13731			40		74				291.3		538.9	
1992	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	427166			1058		1390				247.7		325.4	
1992	46	91	Kankakee	21	Central	Mostly Urban	24.5	125608			313		341				249.2		271.5	
1992	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	52571			73		219				138.9		416.6	
1992	48	95	Knox	9	Central	Mostly Urban	24.3	69000			194		254				281.2		368.1	
1992	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	688932			1458		2007				211.6		291.3	
1992	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	134248			239		342				178		254.8	
1992	51	101	Lawrence	2	Southern	Mostly Rural	58	19514			58		96				297.2		492	
1992	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43413			150		288				345.5		663.4	
1992	53	105	Livingston	11	Central	Mostly Urban	40.8	49015			114		166				232.6		338.7	
1992	54	107	Logan	11	Central	Mostly Urban	39.9	37781			96		255				254.1		674.9	
1992	55	109	McDonough	9	Central	Mostly Urban	29.5	40765			57		84				139.8		206.1	
1992	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	257473			326		575				126.6		223.3	
1992	57	113	McLean	11	Central	Mostly Urban	16.5	163963			486		735				296.4		448.3	
1992	58	115	Macon	6	Central	Mostly Urban	15.3	147247			374		483				254		328	
1992	59	117	Macoupin	7	Central	Mostly Rural	58.5	59469			112		558				188.3		938.3	
1992	60	119	Madison	3	Southern	Mostly Urban	13.3	314430			688		902				218.8		286.9	
1992	61	121	Marion	4	Southern	Mostly Urban	45.1	52037			203		516				390.1		991.6	
1992	62	123	Marshall	10	Central	Completely Rural	100	15922			15		81				94.2		508.7	
1992	63	125	Mason	8	Central	Mostly Rural	77.5	20424			72		110				352.5		538.6	
1992	64	127	Massac	1	Southern	Mostly Rural	50.5	18207			103		222				565.7		1219.3	
1992	65	129	Menard	8	Central	Mostly Rural	75.7	14285			41		68				287		476	
1992	66	131	Mercer	14	Central	Mostly Rural	77.8	21410			44		76				205.5		355	
1992	67	133	Monroe	20	Southern	Mostly Urban	41.4	29455			36		43				122.2		146	
1992	68	135	Montgomery	4	Central	Mostly Urban	41.6	38153			83		297				217.5		778.4	
1992	69	137	Morgan	7	Central	Mostly Urban	36.2	44998			95		205				211.1		455.6	
1992	70	139	Moultrie	6	Central	Mostly Rural	69.2	17505			29		126				165.7		719.8	
1992	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	59768			102		197				170.7		329.6	
1992	72	143	Peoria	10	Central	Mostly Urban	14.6	229580			737		1038				321		452.1	
1992	73	145	Perry	20	Southern	Mostly Urban	43.6	26547			99		124				372.9		467.1	
1992	74	147	Piatt	6	Central	Mostly Rural	67.7	19426			24		82				123.5		422.1	
1992	75	149	Pike	8	Central	Mostly Rural	72.3	21534			100		223				464.4		1035.6	
1992	76	151	Pope	1	Southern	Completely Rural	100	5188			13		29				250.6		559	
1992	77	153	Pulaski	1	Southern	Completely Rural	100	9548			104		221				1089.2		2314.6	
1992	78	155	Putnam	10	Central	Completely Rural	100	7196			9		35				125.1		486.4	
1992	79	157	Randolph	20	Southern	Mostly Urban	42.6	42060			80		110				190.2		261.5	
1992	80	159	Richland	2	Southern	Mostly Urban	43.5	20616			29		124				140.7		601.5	
1992	81	161	Rock Island	14	Central	Mostly Urban	10.9	186355			909		1893				487.8		1015.8	
1992	82	163	St. Clair	20	Southern	Mostly Urban	9.8	332157			861		1173				259.2		353.1	
1992	83	165	Saline	1	Southern	Mostly Urban	43.7	32773			77		315				234.9		961.2	
1992	84	167	Sangamon	7	Central	Mostly Urban	14.1	228996			528		873				230.6		381.2	
1992	85	169	Schuyler	8	Central	Mostly Rural	57.6	9165			12		33				130.9		360.1	
1992	86	171	Scott	7	Central	Completely Rural	100	7008			2		10				28.5		142.7	
1992	87	173	Shelby	4	Central	Mostly Rural	77.7	27952			51		101				182.5		361.3	
1992	88	175	Stark	10	Central	Completely Rural	100	7995			34		76				425.3		950.6	
1992	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	60317			215		378				356.5		626.7	
1992	90	179	Tazewell	10	Central	Mostly Urban	20.4	155956			358		467				229.6		299.4	
1992	91	181	Union	1	Southern	Mostly Rural	65.9	21850			41		145				187.6		663.6	
1992	92	183	Vermilion	5	Central	Mostly Urban	31.3	109350			406		582				371.3		532.2	
1992	93	185	Wabash	2	Southern	Mostly Urban	38.9	16282			30		60				184.3		368.5	
1992	94	187	Warren	9	Central	Mostly Urban	45.5	23883			45		93				188.4		389.4	
1992	95	189	Washington	20	Southern	Mostly Rural	73.6	18460			32		49				173.3		265.4	
1992	96	191	Wayne	2	Southern	Mostly Rural	69.9	20922			46		100				219.9		478	
1992	97	193	White	2	Southern	Mostly Rural	62	19692			50		142				253.9		721.1	
1992	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	75917			372		571				490		752.1	
1992	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	483299			782		835				161.8		172.8	
1992	100	199	Williamson	1	Southern	Mostly Urban	34.8	71835			181		462				252		643.1	
1992	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	326639			1168		4014				357.6		1228.9	
1992	102	203	Woodford	11	Central	Mostly Rural	54.9	42455			71		181				167.2		426.3	
1993	1	1	Adams	8	Central	Mostly Urban	32.6	83911			236		298				281.3		355.1	
1993	2	3	Alexander	1	Southern	Mostly Rural	61.9	13048			117		162				896.7		1241.6	
1993	3	5	Bond	3	Southern	Mostly Rural	60.7	18949			61		86				321.9		453.8	
1993	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	43095			123		369				285.4		856.2	
1993	5	9	Brown	8	Central	Mostly Urban	41.1	7366			9		26				122.2		353	
1993	6	11	Bureau	13	Central	Mostly Rural	57.4	44812			47		110				104.9		245.5	
1993	7	13	Calhoun	8	Southern	Completely Rural	100	6459			21		53				325.1		820.6	
1993	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20579			45		70				218.7		340.2	
1993	9	17	Cass	8	Central	Mostly Rural	52.1	16626			67		148				403		890.2	
1993	10	19	Champaign	6	Central	Mostly Urban	12.7	210910			460		724				218.1		343.3	
1993	11	21	Christian	4	Central	Mostly Urban	43.5	43605			133		327				305		749.9	
1993	12	23	Clark	5	Southern	Mostly Rural	59.5	20108			45		62				223.8		308.3	
1993	13	25	Clay	4	Southern	Mostly Rural	64.7	17884			59		207				329.9		1157.5	
1993	14	27	Clinton	4	Southern	Mostly Urban	48.8	43388			76		229				175.2		527.8	
1993	15	29	Coles	5	Central	Mostly Urban	24.3	63101			219		450				347.1		713.1	
1993	16	31	Cook	co	Northern - Cook	Completely Urban	0	6498905			21580		37761				332.1		581	
1993	17	33	Crawford	2	Southern	Mostly Rural	60.2	25247			81		164				320.8		649.6	
1993	18	35	Cumberland	5	Southern	Completely Rural	100	13780			6		12				43.5		87.1	
1993	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	98569			146		228				148.1		231.3	
1993	20	39	De Witt	6	Central	Mostly Urban	48.8	20753			79		172				380.7		828.8	
1993	21	41	Douglas	6	Central	Mostly Rural	61.6	24701			45		133				182.2		538.4	
1993	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1040803			1435		2550				137.9		245	
1993	23	45	Edgar	5	Central	Mostly Rural	51.8	24408			133		161				544.9		659.6	
1993	24	47	Edwards	2	Southern	Completely Rural	100	8975			8		72				89.1		802.2	
1993	25	49	Effingham	4	Southern	Mostly Rural	59.7	41572			136		254				327.1		611	
1993	26	51	Fayette	4	Southern	Mostly Rural	67	25884			110		189				425		730.2	
1993	27	53	Ford	11	Central	Mostly Urban	41.8	17424			45		190				258.3		1090.4	
1993	28	55	Franklin	2	Southern	Mostly Urban	48.6	48772			170		354				348.6		725.8	
1993	29	57	Fulton	9	Central	Mostly Rural	60	46891			167		303				356.1		646.2	
1993	30	59	Gallatin	2	Southern	Completely Rural	100	8263			31		58				375.2		701.9	
1993	31	61	Greene	7	Central	Mostly Rural	70.8	18954			21		61				110.8		321.8	
1993	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	43136			74		101				171.6		234.1	
1993	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10430			9		52				86.3		498.6	
1993	34	67	Hancock	9	Central	Mostly Rural	71	26509			55		63				207.5		237.7	
1993	35	69	Hardin	2	Southern	Completely Rural	100	6335			28		86				442		1357.5	
1993	36	71	Henderson	9	Central	Mostly Rural	99.7	10140			18		20				177.5		197.2	
1993	37	73	Henry	14	Central	Mostly Rural	50.3	63584			110		155				173		243.8	
1993	38	75	Iroquois	21	Central	Mostly Rural	71.7	39109			111		228				283.8		583	
1993	39	77	Jackson	1	Southern	Mostly Urban	37.2	73002			348		756				476.7		1035.6	
1993	40	79	Jasper	4	Southern	Mostly Rural	69.9	13306			60		99				450.9		744	
1993	41	81	Jefferson	2	Southern	Mostly Rural	58.8	47899			97		185				202.5		386.2	
1993	42	83	Jersey	7	Southern	Mostly Rural	60.6	26404			61		130				231		492.3	
1993	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27595			31		120				112.3		434.9	
1993	44	87	Johnson	1	Southern	Completely Rural	100	13602			25		66				183.8		485.2	
1993	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	436404			972		1258				222.7		288.3	
1993	46	91	Kankakee	21	Central	Mostly Urban	24.5	127475			306		338				240		265.2	
1993	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	53819			80		214				148.6		397.6	
1993	48	95	Knox	9	Central	Mostly Urban	24.3	69056			215		269				311.3		389.5	
1993	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	704481			1504		2072				213.5		294.1	
1993	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	135337			317		429				234.2		317	
1993	51	101	Lawrence	2	Southern	Mostly Rural	58	19544			50		89				255.8		455.4	
1993	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43899			128		307				291.6		699.3	
1993	53	105	Livingston	11	Central	Mostly Urban	40.8	49336			104		170				210.8		344.6	
1993	54	107	Logan	11	Central	Mostly Urban	39.9	37702			119		382				315.6		1013.2	
1993	55	109	McDonough	9	Central	Mostly Urban	29.5	40824			77		107				188.6		262.1	
1993	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	269420			345		581				128.1		215.6	
1993	57	113	McLean	11	Central	Mostly Urban	16.5	167310			534		882				319.2		527.2	
1993	58	115	Macon	6	Central	Mostly Urban	15.3	146699			426		542				290.4		369.5	
1993	59	117	Macoupin	7	Central	Mostly Rural	58.5	59679			93		559				155.8		936.7	
1993	60	119	Madison	3	Southern	Mostly Urban	13.3	315809			805		1013				254.9		320.8	
1993	61	121	Marion	4	Southern	Mostly Urban	45.1	52196			233		647				446.4		1239.6	
1993	62	123	Marshall	10	Central	Completely Rural	100	15806			31		122				196.1		771.9	
1993	63	125	Mason	8	Central	Mostly Rural	77.5	20422			71		127				347.7		621.9	
1993	64	127	Massac	1	Southern	Mostly Rural	50.5	18411			91		180				494.3		977.7	
1993	65	129	Menard	8	Central	Mostly Rural	75.7	14547			39		63				268.1		433.1	
1993	66	131	Mercer	14	Central	Mostly Rural	77.8	21265			65		101				305.7		475	
1993	67	133	Monroe	20	Southern	Mostly Urban	41.4	30023			35		37				116.6		123.2	
1993	68	135	Montgomery	4	Central	Mostly Urban	41.6	37736			81		386				214.6		1022.9	
1993	69	137	Morgan	7	Central	Mostly Urban	36.2	45324			141		290				311.1		639.8	
1993	70	139	Moultrie	6	Central	Mostly Rural	69.2	17301			28		109				161.8		630	
1993	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	60558			106		194				175		320.4	
1993	72	143	Peoria	10	Central	Mostly Urban	14.6	229505			1020		1428				444.4		622.2	
1993	73	145	Perry	20	Southern	Mostly Urban	43.6	26619			90		137				338.1		514.7	
1993	74	147	Piatt	6	Central	Mostly Rural	67.7	19754			23		110				116.4		556.8	
1993	75	149	Pike	8	Central	Mostly Rural	72.3	21517			80		193				371.8		897	
1993	76	151	Pope	1	Southern	Completely Rural	100	5264			6		12				114		228	
1993	77	153	Pulaski	1	Southern	Completely Rural	100	9429			64		96				678.8		1018.1	
1993	78	155	Putnam	10	Central	Completely Rural	100	7210			10		60				138.7		832.2	
1993	79	157	Randolph	20	Southern	Mostly Urban	42.6	41806			75		98				179.4		234.4	
1993	80	159	Richland	2	Southern	Mostly Urban	43.5	20463			43		181				210.1		884.5	
1993	81	161	Rock Island	14	Central	Mostly Urban	10.9	186680			831		1674				445.1		896.7	
1993	82	163	St. Clair	20	Southern	Mostly Urban	9.8	335317			953		1320				284.2		393.7	
1993	83	165	Saline	1	Southern	Mostly Urban	43.7	33145			77		362				232.3		1092.2	
1993	84	167	Sangamon	7	Central	Mostly Urban	14.1	232240			544		866				234.2		372.9	
1993	85	169	Schuyler	8	Central	Mostly Rural	57.6	9213			11		33				119.4		358.2	
1993	86	171	Scott	7	Central	Completely Rural	100	6931			2		11				28.9		158.7	
1993	87	173	Shelby	4	Central	Mostly Rural	77.7	27957			61		110				218.2		393.5	
1993	88	175	Stark	10	Central	Completely Rural	100	8001			23		54				287.5		674.9	
1993	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	60673			241		342				397.2		563.7	
1993	90	179	Tazewell	10	Central	Mostly Urban	20.4	155837			334		508				214.3		326	
1993	91	181	Union	1	Southern	Mostly Rural	65.9	21960			49		103				223.1		469	
1993	92	183	Vermilion	5	Central	Mostly Urban	31.3	109042			392		580				359.5		531.9	
1993	93	185	Wabash	2	Southern	Mostly Urban	38.9	16359			29		55				177.3		336.2	
1993	94	187	Warren	9	Central	Mostly Urban	45.5	23565			59		96				250.4		407.4	
1993	95	189	Washington	20	Southern	Mostly Rural	73.6	18621			26		33				139.6		177.2	
1993	96	191	Wayne	2	Southern	Mostly Rural	69.9	20971			40		120				190.7		572.2	
1993	97	193	White	2	Southern	Mostly Rural	62	19445			49		151				252		776.5	
1993	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	75724			311		473				410.7		624.6	
1993	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	499439			926		1000				185.4		200.2	
1993	100	199	Williamson	1	Southern	Mostly Urban	34.8	72402			210		547				290		755.5	
1993	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	330702			1198		3058				362.3		924.7	
1993	102	203	Woodford	11	Central	Mostly Rural	54.9	42680			83		197				194.5		461.6	
1994	1	1	Adams	8	Central	Mostly Urban	32.6	84934			261		337				307.3		396.8	
1994	2	3	Alexander	1	Southern	Mostly Rural	61.9	12759			111		159				870		1246.2	
1994	3	5	Bond	3	Southern	Mostly Rural	60.7	19652			55		98				279.9		498.7	
1994	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	44892			117		357				260.6		795.2	
1994	5	9	Brown	8	Central	Mostly Urban	41.1	7582			13		32				171.5		422.1	
1994	6	11	Bureau	13	Central	Mostly Rural	57.4	44782			49		97				109.4		216.6	
1994	7	13	Calhoun	8	Southern	Completely Rural	100	6272			32		73				510.2		1163.9	
1994	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20796			41		68				197.2		327	
1994	9	17	Cass	8	Central	Mostly Rural	52.1	16795			62		137				369.2		815.7	
1994	10	19	Champaign	6	Central	Mostly Urban	12.7	208430			539		854				258.6		409.7	
1994	11	21	Christian	4	Central	Mostly Urban	43.5	43738			141		410				322.4		937.4	
1994	12	23	Clark	5	Southern	Mostly Rural	59.5	20358			39		61				191.6		299.6	
1994	13	25	Clay	4	Southern	Mostly Rural	64.7	17898			53		186				296.1		1039.2	
1994	14	27	Clinton	4	Southern	Mostly Urban	48.8	43525			62		187				142.4		429.6	
1994	15	29	Coles	5	Central	Mostly Urban	24.3	63710			181		405				284.1		635.7	
1994	16	31	Cook	co	Northern - Cook	Completely Urban	0	6540814			22211		37706				339.6		576.5	
1994	17	33	Crawford	2	Southern	Mostly Rural	60.2	25500			74		185				290.2		725.5	
1994	18	35	Cumberland	5	Southern	Completely Rural	100	13892			9		16				64.8		115.2	
1994	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	100258			136		224				135.7		223.4	
1994	20	39	De Witt	6	Central	Mostly Urban	48.8	20901			38		148				181.8		708.1	
1994	21	41	Douglas	6	Central	Mostly Rural	61.6	24818			47		151				189.4		608.4	
1994	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1060298			1350		2205				127.3		208	
1994	23	45	Edgar	5	Central	Mostly Rural	51.8	24547			161		251				655.9		1022.5	
1994	24	47	Edwards	2	Southern	Completely Rural	100	8899			17		88				191		988.9	
1994	25	49	Effingham	4	Southern	Mostly Rural	59.7	42057			129		270				306.7		642	
1994	26	51	Fayette	4	Southern	Mostly Rural	67	25925			94		185				362.6		713.6	
1994	27	53	Ford	11	Central	Mostly Urban	41.8	17448			39		162				223.5		928.5	
1994	28	55	Franklin	2	Southern	Mostly Urban	48.6	48859			151		377				309.1		771.6	
1994	29	57	Fulton	9	Central	Mostly Rural	60	46874			146		227				311.5		484.3	
1994	30	59	Gallatin	2	Southern	Completely Rural	100	8186			0		53				0		647.4	
1994	31	61	Greene	7	Central	Mostly Rural	70.8	18928			27		105				142.6		554.7	
1994	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	43638			77		111				176.5		254.4	
1994	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10421			10		76				96		729.3	
1994	34	67	Hancock	9	Central	Mostly Rural	71	26225			45		49				171.6		186.8	
1994	35	69	Hardin	2	Southern	Completely Rural	100	6174			21		69				340.1		1117.6	
1994	36	71	Henderson	9	Central	Mostly Rural	99.7	9987			14		15				140.2		150.2	
1994	37	73	Henry	14	Central	Mostly Rural	50.3	63686			118		191				185.3		299.9	
1994	38	75	Iroquois	21	Central	Mostly Rural	71.7	39192			115		246				293.4		627.7	
1994	39	77	Jackson	1	Southern	Mostly Urban	37.2	72756			376		788				516.8		1083.1	
1994	40	79	Jasper	4	Southern	Mostly Rural	69.9	13282			54		88				406.6		662.6	
1994	41	81	Jefferson	2	Southern	Mostly Rural	58.8	48486			94		182				193.9		375.4	
1994	42	83	Jersey	7	Southern	Mostly Rural	60.6	26090			55		134				210.8		513.6	
1994	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27657			35		151				126.6		546	
1994	44	87	Johnson	1	Southern	Completely Rural	100	14030			25		70				178.2		498.9	
1994	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	445792			871		1184				195.4		265.6	
1994	46	91	Kankakee	21	Central	Mostly Urban	24.5	128665			345		381				268.1		296.1	
1994	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	55844			98		284				175.5		508.6	
1994	48	95	Knox	9	Central	Mostly Urban	24.3	68719			213		275				310		400.2	
1994	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	721689			1399		2052				193.9		284.3	
1994	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	135871			344		500				253.2		368	
1994	51	101	Lawrence	2	Southern	Mostly Rural	58	19651			39		73				198.5		371.5	
1994	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	44195			134		341				303.2		771.6	
1994	53	105	Livingston	11	Central	Mostly Urban	40.8	49571			86		135				173.5		272.3	
1994	54	107	Logan	11	Central	Mostly Urban	39.9	37753			96		290				254.3		768.2	
1994	55	109	McDonough	9	Central	Mostly Urban	29.5	40916			55		78				134.4		190.6	
1994	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	281562			403		608				143.1		215.9	
1994	57	113	McLean	11	Central	Mostly Urban	16.5	169755			529		964				311.6		567.9	
1994	58	115	Macon	6	Central	Mostly Urban	15.3	146084			565		710				386.8		486	
1994	59	117	Macoupin	7	Central	Mostly Rural	58.5	60067			96		579				159.8		963.9	
1994	60	119	Madison	3	Southern	Mostly Urban	13.3	317273			800		1039				252.1		327.5	
1994	61	121	Marion	4	Southern	Mostly Urban	45.1	52150			214		696				410.4		1334.6	
1994	62	123	Marshall	10	Central	Completely Rural	100	15777			41		94				259.9		595.8	
1994	63	125	Mason	8	Central	Mostly Rural	77.5	20344			66		107				324.4		526	
1994	64	127	Massac	1	Southern	Mostly Rural	50.5	18513			77		185				415.9		999.3	
1994	65	129	Menard	8	Central	Mostly Rural	75.7	14824			32		62				215.9		418.2	
1994	66	131	Mercer	14	Central	Mostly Rural	77.8	21256			55		81				258.8		381.1	
1994	67	133	Monroe	20	Southern	Mostly Urban	41.4	30391			38		45				125		148.1	
1994	68	135	Montgomery	4	Central	Mostly Urban	41.6	37873			78		420				206		1109	
1994	69	137	Morgan	7	Central	Mostly Urban	36.2	45418			146		283				321.5		623.1	
1994	70	139	Moultrie	6	Central	Mostly Rural	69.2	17428			24		78				137.7		447.6	
1994	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	61400			118		227				192.2		369.7	
1994	72	143	Peoria	10	Central	Mostly Urban	14.6	229238			1056		1569				460.7		684.4	
1994	73	145	Perry	20	Southern	Mostly Urban	43.6	26452			72		101				272.2		381.8	
1994	74	147	Piatt	6	Central	Mostly Rural	67.7	19732			25		125				126.7		633.5	
1994	75	149	Pike	8	Central	Mostly Rural	72.3	21185			108		303				509.8		1430.3	
1994	76	151	Pope	1	Southern	Completely Rural	100	5278			11		21				208.4		397.9	
1994	77	153	Pulaski	1	Southern	Completely Rural	100	9424			37		69				392.6		732.2	
1994	78	155	Putnam	10	Central	Completely Rural	100	7312			13		85				177.8		1162.5	
1994	79	157	Randolph	20	Southern	Mostly Urban	42.6	42048			92		121				218.8		287.8	
1994	80	159	Richland	2	Southern	Mostly Urban	43.5	20589			24		161				116.6		782	
1994	81	161	Rock Island	14	Central	Mostly Urban	10.9	186199			911		1675				489.3		899.6	
1994	82	163	St. Clair	20	Southern	Mostly Urban	9.8	334742			854		1344				255.1		401.5	
1994	83	165	Saline	1	Southern	Mostly Urban	43.7	33165			72		363				217.1		1094.5	
1994	84	167	Sangamon	7	Central	Mostly Urban	14.1	235219			495		793				210.4		337.1	
1994	85	169	Schuyler	8	Central	Mostly Rural	57.6	9169			13		44				141.8		479.9	
1994	86	171	Scott	7	Central	Completely Rural	100	6951			1		6				14.4		86.3	
1994	87	173	Shelby	4	Central	Mostly Rural	77.7	28075			59		118				210.2		420.3	
1994	88	175	Stark	10	Central	Completely Rural	100	7954			35		72				440		905.2	
1994	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	61040			249		356				407.9		583.2	
1994	90	179	Tazewell	10	Central	Mostly Urban	20.4	156191			328		556				210		356	
1994	91	181	Union	1	Southern	Mostly Rural	65.9	21983			46		123				209.3		559.5	
1994	92	183	Vermilion	5	Central	Mostly Urban	31.3	109288			402		659				367.8		603	
1994	93	185	Wabash	2	Southern	Mostly Urban	38.9	16198			33		65				203.7		401.3	
1994	94	187	Warren	9	Central	Mostly Urban	45.5	23536			69		102				293.2		433.4	
1994	95	189	Washington	20	Southern	Mostly Rural	73.6	18723			26		42				138.9		224.3	
1994	96	191	Wayne	2	Southern	Mostly Rural	69.9	21063			34		103				161.4		489	
1994	97	193	White	2	Southern	Mostly Rural	62	19247			63		153				327.3		794.9	
1994	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	75822			273		426				360.1		561.8	
1994	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	517299			1030		1103				199.1		213.2	
1994	100	199	Williamson	1	Southern	Mostly Urban	34.8	73287			194		562				264.7		766.8	
1994	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	333726			1275		3091				382		926.2	
1994	102	203	Woodford	11	Central	Mostly Rural	54.9	42892			98		265				228.5		617.8	
1995	1	1	Adams	8	Central	Mostly Urban	32.6	85268			271		370				317.8		433.9	
1995	2	3	Alexander	1	Southern	Mostly Rural	61.9	12641			107		158				846.5		1249.9	
1995	3	5	Bond	3	Southern	Mostly Rural	60.7	20802			68		136				326.9		653.8	
1995	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	46777			118		351				252.3		750.4	
1995	5	9	Brown	8	Central	Mostly Urban	41.1	7611			15		34				197.1		446.7	
1995	6	11	Bureau	13	Central	Mostly Rural	57.4	44722			46		102				102.9		228.1	
1995	7	13	Calhoun	8	Southern	Completely Rural	100	6215			18		43				289.6		691.9	
1995	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20822			46		86				220.9		413	
1995	9	17	Cass	8	Central	Mostly Rural	52.1	16780			62		136				369.5		810.5	
1995	10	19	Champaign	6	Central	Mostly Urban	12.7	209042			588		978				281.3		467.8	
1995	11	21	Christian	4	Central	Mostly Urban	43.5	44014			166		456				377.2		1036	
1995	12	23	Clark	5	Southern	Mostly Rural	59.5	20449			36		53				176		259.2	
1995	13	25	Clay	4	Southern	Mostly Rural	64.7	17982			61		226				339.2		1256.8	
1995	14	27	Clinton	4	Southern	Mostly Urban	48.8	43794			58		175				132.4		399.6	
1995	15	29	Coles	5	Central	Mostly Urban	24.3	63230			163		319				257.8		504.5	
1995	16	31	Cook	co	Northern - Cook	Completely Urban	0	6577897			23041		35602				350.3		541.2	
1995	17	33	Crawford	2	Southern	Mostly Rural	60.2	25496			93		212				364.8		831.5	
1995	18	35	Cumberland	5	Southern	Completely Rural	100	13958			16		29				114.6		207.8	
1995	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	100748			180		301				178.7		298.8	
1995	20	39	De Witt	6	Central	Mostly Urban	48.8	20846			28		126				134.3		604.4	
1995	21	41	Douglas	6	Central	Mostly Rural	61.6	24988			51		174				204.1		696.3	
1995	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1073568			1415		2239				131.8		208.6	
1995	23	45	Edgar	5	Central	Mostly Rural	51.8	24840			145		246				583.7		990.3	
1995	24	47	Edwards	2	Southern	Completely Rural	100	8918			26		121				291.5		1356.8	
1995	25	49	Effingham	4	Southern	Mostly Rural	59.7	42421			136		386				320.6		909.9	
1995	26	51	Fayette	4	Southern	Mostly Rural	67	26197			95		264				362.6		1007.7	
1995	27	53	Ford	11	Central	Mostly Urban	41.8	17747			39		157				219.8		884.7	
1995	28	55	Franklin	2	Southern	Mostly Urban	48.6	48918			142		328				290.3		670.5	
1995	29	57	Fulton	9	Central	Mostly Rural	60	46940			146		239				311		509.2	
1995	30	59	Gallatin	2	Southern	Completely Rural	100	8113			35		53				431.4		653.3	
1995	31	61	Greene	7	Central	Mostly Rural	70.8	18909			22		138				116.3		729.8	
1995	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	44109			99		135				224.4		306.1	
1995	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10569			16		67				151.4		633.9	
1995	34	67	Hancock	9	Central	Mostly Rural	71	26033			36		39				138.3		149.8	
1995	35	69	Hardin	2	Southern	Completely Rural	100	6122			27		78				441		1274.1	
1995	36	71	Henderson	9	Central	Mostly Rural	99.7	10170			7		12				68.8		118	
1995	37	73	Henry	14	Central	Mostly Rural	50.3	63899			119		197				186.2		308.3	
1995	38	75	Iroquois	21	Central	Mostly Rural	71.7	39195			113		225				288.3		574.1	
1995	39	77	Jackson	1	Southern	Mostly Urban	37.2	72438			398		661				549.4		912.5	
1995	40	79	Jasper	4	Southern	Mostly Rural	69.9	13227			41		98				310		740.9	
1995	41	81	Jefferson	2	Southern	Mostly Rural	58.8	48904			141		263				288.3		537.8	
1995	42	83	Jersey	7	Southern	Mostly Rural	60.6	26439			29		90				109.7		340.4	
1995	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27488			18		102				65.5		371.1	
1995	44	87	Johnson	1	Southern	Completely Rural	100	14588			22		62				150.8		425	
1995	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	459738			1098		1475				238.8		320.8	
1995	46	91	Kankakee	21	Central	Mostly Urban	24.5	128953			369		413				286.2		320.3	
1995	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	57581			127		297				220.6		515.8	
1995	48	95	Knox	9	Central	Mostly Urban	24.3	68571			216		293				315		427.3	
1995	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	740426			1417		2179				191.4		294.3	
1995	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	136572			362		511				265.1		374.2	
1995	51	101	Lawrence	2	Southern	Mostly Rural	58	19763			32		76				161.9		384.6	
1995	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	44680			163		334				364.8		747.5	
1995	53	105	Livingston	11	Central	Mostly Urban	40.8	49933			86		130				172.2		260.3	
1995	54	107	Logan	11	Central	Mostly Urban	39.9	37984			104		262				273.8		689.8	
1995	55	109	McDonough	9	Central	Mostly Urban	29.5	39514			61		85				154.4		215.1	
1995	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	294013			430		637				146.3		216.7	
1995	57	113	McLean	11	Central	Mostly Urban	16.5	172927			523		970				302.4		560.9	
1995	58	115	Macon	6	Central	Mostly Urban	15.3	145814			749		925				513.7		634.4	
1995	59	117	Macoupin	7	Central	Mostly Rural	58.5	60344			104		616				172.3		1020.8	
1995	60	119	Madison	3	Southern	Mostly Urban	13.3	318729			954		1144				299.3		358.9	
1995	61	121	Marion	4	Southern	Mostly Urban	45.1	52403			230		760				438.9		1450.3	
1995	62	123	Marshall	10	Central	Completely Rural	100	15904			49		119				308.1		748.2	
1995	63	125	Mason	8	Central	Mostly Rural	77.5	20282			88		147				433.9		724.8	
1995	64	127	Massac	1	Southern	Mostly Rural	50.5	18538			62		163				334.4		879.3	
1995	65	129	Menard	8	Central	Mostly Rural	75.7	15097			30		53				198.7		351.1	
1995	66	131	Mercer	14	Central	Mostly Rural	77.8	21240			50		76				235.4		357.8	
1995	67	133	Monroe	20	Southern	Mostly Urban	41.4	31113			37		44				118.9		141.4	
1995	68	135	Montgomery	4	Central	Mostly Urban	41.6	37903			78		340				205.8		897	
1995	69	137	Morgan	7	Central	Mostly Urban	36.2	45328			152		287				335.3		633.2	
1995	70	139	Moultrie	6	Central	Mostly Rural	69.2	17537			32		107				182.5		610.1	
1995	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	61995			95		185				153.2		298.4	
1995	72	143	Peoria	10	Central	Mostly Urban	14.6	230161			1208		1779				524.8		772.9	
1995	73	145	Perry	20	Southern	Mostly Urban	43.6	26402			65		93				246.2		352.2	
1995	74	147	Piatt	6	Central	Mostly Rural	67.7	19896			26		110				130.7		552.9	
1995	75	149	Pike	8	Central	Mostly Rural	72.3	21298			116		350				544.7		1643.3	
1995	76	151	Pope	1	Southern	Completely Rural	100	5324			8		22				150.3		413.2	
1995	77	153	Pulaski	1	Southern	Completely Rural	100	9505			39		68				410.3		715.4	
1995	78	155	Putnam	10	Central	Completely Rural	100	7261			18		99				247.9		1363.4	
1995	79	157	Randolph	20	Southern	Mostly Urban	42.6	41890			85		106				202.9		253	
1995	80	159	Richland	2	Southern	Mostly Urban	43.5	20475			39		231				190.5		1128.2	
1995	81	161	Rock Island	14	Central	Mostly Urban	10.9	185821			1036		1874				557.5		1008.5	
1995	82	163	St. Clair	20	Southern	Mostly Urban	9.8	333457			891		1217				267.2		365	
1995	83	165	Saline	1	Southern	Mostly Urban	43.7	32981			88		294				266.8		891.4	
1995	84	167	Sangamon	7	Central	Mostly Urban	14.1	235590			578		867				245.3		368	
1995	85	169	Schuyler	8	Central	Mostly Rural	57.6	9297			17		51				182.9		548.6	
1995	86	171	Scott	7	Central	Completely Rural	100	6957			3		15				43.1		215.6	
1995	87	173	Shelby	4	Central	Mostly Rural	77.7	28300			41		131				144.9		462.9	
1995	88	175	Stark	10	Central	Completely Rural	100	7993			28		97				350.3		1213.6	
1995	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	60993			310		428				508.3		701.7	
1995	90	179	Tazewell	10	Central	Mostly Urban	20.4	158572			372		659				234.6		415.6	
1995	91	181	Union	1	Southern	Mostly Rural	65.9	22152			52		132				234.7		595.9	
1995	92	183	Vermilion	5	Central	Mostly Urban	31.3	107603			357		664				331.8		617.1	
1995	93	185	Wabash	2	Southern	Mostly Urban	38.9	16278			23		49				141.3		301	
1995	94	187	Warren	9	Central	Mostly Urban	45.5	23529			64		86				272		365.5	
1995	95	189	Washington	20	Southern	Mostly Rural	73.6	18805			32		54				170.2		287.2	
1995	96	191	Wayne	2	Southern	Mostly Rural	69.9	21088			63		132				298.7		625.9	
1995	97	193	White	2	Southern	Mostly Rural	62	19233			73		175				379.6		909.9	
1995	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	75824			303		465				399.6		613.3	
1995	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	537965			1101		1163				204.7		216.2	
1995	100	199	Williamson	1	Southern	Mostly Urban	34.8	73885			186		535				251.7		724.1	
1995	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	336787			1432		3191				425.2		947.5	
1995	102	203	Woodford	11	Central	Mostly Rural	54.9	43560			86		317				197.4		727.7	
1996	1	1	Adams	8	Central	Mostly Urban	32.6	85309			339		492				397.4		576.7	
1996	2	3	Alexander	1	Southern	Mostly Rural	61.9	12473			94		165				753.6		1322.9	
1996	3	5	Bond	3	Southern	Mostly Rural	60.7	21005			57		125				271.4		595.1	
1996	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	48550			134		374				276		770.3	
1996	5	9	Brown	8	Central	Mostly Urban	41.1	7973			16		47				200.7		589.5	
1996	6	11	Bureau	13	Central	Mostly Rural	57.4	44445			60		156				135		351	
1996	7	13	Calhoun	8	Southern	Completely Rural	100	6294			14		42				222.4		667.3	
1996	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20896			39		95				186.6		454.6	
1996	9	17	Cass	8	Central	Mostly Rural	52.1	16859			52		123				308.4		729.6	
1996	10	19	Champaign	6	Central	Mostly Urban	12.7	211557			630		1059				297.8		500.6	
1996	11	21	Christian	4	Central	Mostly Urban	43.5	43984			167		519				379.7		1180	
1996	12	23	Clark	5	Southern	Mostly Rural	59.5	20643			38		44				184.1		213.1	
1996	13	25	Clay	4	Southern	Mostly Rural	64.7	17974			50		202				278.2		1123.8	
1996	14	27	Clinton	4	Southern	Mostly Urban	48.8	43860			67		190				152.8		433.2	
1996	15	29	Coles	5	Central	Mostly Urban	24.3	63438			167		312				263.2		491.8	
1996	16	31	Cook	co	Northern - Cook	Completely Urban	0	6614328			23525		36516				355.7		552.1	
1996	17	33	Crawford	2	Southern	Mostly Rural	60.2	25532			100		249				391.7		975.2	
1996	18	35	Cumberland	5	Southern	Completely Rural	100	14082			18		33				127.8		234.3	
1996	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	102330			201		310				196.4		302.9	
1996	20	39	De Witt	6	Central	Mostly Urban	48.8	20731			56		162				270.1		781.4	
1996	21	41	Douglas	6	Central	Mostly Rural	61.6	24991			60		194				240.1		776.3	
1996	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1084794			1394		2148				128.5		198	
1996	23	45	Edgar	5	Central	Mostly Rural	51.8	25041			169		317				674.9		1265.9	
1996	24	47	Edwards	2	Southern	Completely Rural	100	8806			25		112				283.9		1271.9	
1996	25	49	Effingham	4	Southern	Mostly Rural	59.7	42872			132		459				307.9		1070.6	
1996	26	51	Fayette	4	Southern	Mostly Rural	67	26415			74		233				280.1		882.1	
1996	27	53	Ford	11	Central	Mostly Urban	41.8	17785			44		188				247.4		1057.1	
1996	28	55	Franklin	2	Southern	Mostly Urban	48.6	49086			174		435				354.5		886.2	
1996	29	57	Fulton	9	Central	Mostly Rural	60	47304			130		258				274.8		545.4	
1996	30	59	Gallatin	2	Southern	Completely Rural	100	8090			24		41				296.7		506.8	
1996	31	61	Greene	7	Central	Mostly Rural	70.8	18803			16		161				85.1		856.2	
1996	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	44839			90		124				200.7		276.5	
1996	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10603			22		69				207.5		650.8	
1996	34	67	Hancock	9	Central	Mostly Rural	71	25867			27		32				104.4		123.7	
1996	35	69	Hardin	2	Southern	Completely Rural	100	6005			26		84				433		1398.8	
1996	36	71	Henderson	9	Central	Mostly Rural	99.7	10155			18		31				177.3		305.3	
1996	37	73	Henry	14	Central	Mostly Rural	50.3	63761			137		220				214.9		345	
1996	38	75	Iroquois	21	Central	Mostly Rural	71.7	39426			131		221				332.3		560.5	
1996	39	77	Jackson	1	Southern	Mostly Urban	37.2	72206			449		687				621.8		951.4	
1996	40	79	Jasper	4	Southern	Mostly Rural	69.9	13161			54		135				410.3		1025.8	
1996	41	81	Jefferson	2	Southern	Mostly Rural	58.8	49012			192		307				391.7		626.4	
1996	42	83	Jersey	7	Southern	Mostly Rural	60.6	26554			50		111				188.3		418	
1996	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27439			24		128				87.5		466.5	
1996	44	87	Johnson	1	Southern	Completely Rural	100	14850			28		54				188.6		363.6	
1996	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	472946			1163		1541				245.9		325.8	
1996	46	91	Kankakee	21	Central	Mostly Urban	24.5	129372			373		414				288.3		320	
1996	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	60571			138		283				227.8		467.2	
1996	48	95	Knox	9	Central	Mostly Urban	24.3	68316			206		316				301.5		462.6	
1996	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	761306			1549		2466				203.5		323.9	
1996	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	137425			429		604				312.2		439.5	
1996	51	101	Lawrence	2	Southern	Mostly Rural	58	19576			51		110				260.5		561.9	
1996	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	44642			150		345				336		772.8	
1996	53	105	Livingston	11	Central	Mostly Urban	40.8	49217			89		127				180.8		258	
1996	54	107	Logan	11	Central	Mostly Urban	39.9	37824			116		225				306.7		594.9	
1996	55	109	McDonough	9	Central	Mostly Urban	29.5	39427			73		93				185.2		235.9	
1996	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	303668			402		658				132.4		216.7	
1996	57	113	McLean	11	Central	Mostly Urban	16.5	174722			545		966				311.9		552.9	
1996	58	115	Macon	6	Central	Mostly Urban	15.3	144807			993		1180				685.7		814.9	
1996	59	117	Macoupin	7	Central	Mostly Rural	58.5	60641			132		728				217.7		1200.5	
1996	60	119	Madison	3	Southern	Mostly Urban	13.3	319374			952		1126				298.1		352.6	
1996	61	121	Marion	4	Southern	Mostly Urban	45.1	52583			233		757				443.1		1439.6	
1996	62	123	Marshall	10	Central	Completely Rural	100	15914			46		129				289.1		810.6	
1996	63	125	Mason	8	Central	Mostly Rural	77.5	20162			93		154				461.3		763.8	
1996	64	127	Massac	1	Southern	Mostly Rural	50.5	18616			67		129				359.9		693	
1996	65	129	Menard	8	Central	Mostly Rural	75.7	15282			35		75				229		490.8	
1996	66	131	Mercer	14	Central	Mostly Rural	77.8	21156			51		73				241.1		345.1	
1996	67	133	Monroe	20	Southern	Mostly Urban	41.4	31886			39		44				122.3		138	
1996	68	135	Montgomery	4	Central	Mostly Urban	41.6	37860			93		393				245.6		1038	
1996	69	137	Morgan	7	Central	Mostly Urban	36.2	45357			145		268				319.7		590.9	
1996	70	139	Moultrie	6	Central	Mostly Rural	69.2	17629			34		114				192.9		646.7	
1996	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	62856			91		194				144.8		308.6	
1996	72	143	Peoria	10	Central	Mostly Urban	14.6	229997			1156		1803				502.6		783.9	
1996	73	145	Perry	20	Southern	Mostly Urban	43.6	26546			55		101				207.2		380.5	
1996	74	147	Piatt	6	Central	Mostly Rural	67.7	20023			30		154				149.8		769.1	
1996	75	149	Pike	8	Central	Mostly Rural	72.3	21352			129		237				604.2		1110	
1996	76	151	Pope	1	Southern	Completely Rural	100	5302			16		76				301.8		1433.4	
1996	77	153	Pulaski	1	Southern	Completely Rural	100	9424			38		70				403.2		742.8	
1996	78	155	Putnam	10	Central	Completely Rural	100	7282			17		93				233.5		1277.1	
1996	79	157	Randolph	20	Southern	Mostly Urban	42.6	41612			87		112				209.1		269.2	
1996	80	159	Richland	2	Southern	Mostly Urban	43.5	20365			32		228				157.1		1119.6	
1996	81	161	Rock Island	14	Central	Mostly Urban	10.9	184848			1150		2071				622.1		1120.4	
1996	82	163	St. Clair	20	Southern	Mostly Urban	9.8	332467			896		1178				269.5		354.3	
1996	83	165	Saline	1	Southern	Mostly Urban	43.7	33210			99		292				298.1		879.3	
1996	84	167	Sangamon	7	Central	Mostly Urban	14.1	236045			603		868				255.5		367.7	
1996	85	169	Schuyler	8	Central	Mostly Rural	57.6	9162			19		64				207.4		698.5	
1996	86	171	Scott	7	Central	Completely Rural	100	6894			6		15				87		217.6	
1996	87	173	Shelby	4	Central	Mostly Rural	77.7	28574			35		130				122.5		455	
1996	88	175	Stark	10	Central	Completely Rural	100	8000			37		139				462.5		1737.5	
1996	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	61255			327		449				533.8		733	
1996	90	179	Tazewell	10	Central	Mostly Urban	20.4	158475			350		737				220.9		465.1	
1996	91	181	Union	1	Southern	Mostly Rural	65.9	22339			69		154				308.9		689.4	
1996	92	183	Vermilion	5	Central	Mostly Urban	31.3	105968			436		881				411.4		831.4	
1996	93	185	Wabash	2	Southern	Mostly Urban	38.9	16042			35		61				218.2		380.3	
1996	94	187	Warren	9	Central	Mostly Urban	45.5	23254			67		98				288.1		421.4	
1996	95	189	Washington	20	Southern	Mostly Rural	73.6	18867			32		56				169.6		296.8	
1996	96	191	Wayne	2	Southern	Mostly Rural	69.9	21072			63		123				299		583.7	
1996	97	193	White	2	Southern	Mostly Rural	62	19034			71		221				373		1161.1	
1996	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	75921			331		544				436		716.5	
1996	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	559402			1078		1182				192.7		211.3	
1996	100	199	Williamson	1	Southern	Mostly Urban	34.8	74118			193		526				260.4		709.7	
1996	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	340364			1448		3283				425.4		964.6	
1996	102	203	Woodford	11	Central	Mostly Rural	54.9	43797			81		340				184.9		776.3	
1997	1	1	Adams	8	Central	Mostly Urban	32.6	85258			384		597				450.4		700.2	
1997	2	3	Alexander	1	Southern	Mostly Rural	61.9	12155			90		170				740.4		1398.6	
1997	3	5	Bond	3	Southern	Mostly Rural	60.7	21100			54		119				255.9		564	
1997	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	49751			172		491				345.7		986.9	
1997	5	9	Brown	8	Central	Mostly Urban	41.1	7994			17		47				212.7		587.9	
1997	6	11	Bureau	13	Central	Mostly Rural	57.4	44442			54		162				121.5		364.5	
1997	7	13	Calhoun	8	Southern	Completely Rural	100	6290			12		46				190.8		731.3	
1997	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20892			39		94				186.7		449.9	
1997	9	17	Cass	8	Central	Mostly Rural	52.1	16882			65		134				385		793.7	
1997	10	19	Champaign	6	Central	Mostly Urban	12.7	213249			737		1235				345.6		579.1	
1997	11	21	Christian	4	Central	Mostly Urban	43.5	43871			188		639				428.5		1456.5	
1997	12	23	Clark	5	Southern	Mostly Rural	59.5	20750			64		75				308.4		361.4	
1997	13	25	Clay	4	Southern	Mostly Rural	64.7	17972			54		186				300.5		1034.9	
1997	14	27	Clinton	4	Southern	Mostly Urban	48.8	43835			80		212				182.5		483.6	
1997	15	29	Coles	5	Central	Mostly Urban	24.3	63631			193		393				303.3		617.6	
1997	16	31	Cook	co	Northern - Cook	Completely Urban	0	6637203			24148		37595				363.8		566.4	
1997	17	33	Crawford	2	Southern	Mostly Rural	60.2	25372			93		303				366.5		1194.2	
1997	18	35	Cumberland	5	Southern	Completely Rural	100	14054			13		28				92.5		199.2	
1997	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	103729			167		267				161		257.4	
1997	20	39	De Witt	6	Central	Mostly Urban	48.8	20735			83		236				400.3		1138.2	
1997	21	41	Douglas	6	Central	Mostly Rural	61.6	25083			54		219				215.3		873.1	
1997	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1098158			1423		2121				129.6		193.1	
1997	23	45	Edgar	5	Central	Mostly Rural	51.8	24735			152		295				614.5		1192.6	
1997	24	47	Edwards	2	Southern	Completely Rural	100	8663			23		93				265.5		1073.5	
1997	25	49	Effingham	4	Southern	Mostly Rural	59.7	43079			144		515				334.3		1195.5	
1997	26	51	Fayette	4	Southern	Mostly Rural	67	26977			79		266				292.8		986	
1997	27	53	Ford	11	Central	Mostly Urban	41.8	17815			56		217				314.3		1218.1	
1997	28	55	Franklin	2	Southern	Mostly Urban	48.6	48433			179		448				369.6		925	
1997	29	57	Fulton	9	Central	Mostly Rural	60	46956			154		325				328		692.1	
1997	30	59	Gallatin	2	Southern	Completely Rural	100	7942			27		58				340		730.3	
1997	31	61	Greene	7	Central	Mostly Rural	70.8	18772			4		104				21.3		554	
1997	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	45567			84		123				184.3		269.9	
1997	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10652			18		84				169		788.6	
1997	34	67	Hancock	9	Central	Mostly Rural	71	25516			28		33				109.7		129.3	
1997	35	69	Hardin	2	Southern	Completely Rural	100	5893			27		73				458.2		1238.8	
1997	36	71	Henderson	9	Central	Mostly Rural	99.7	10245			24		34				234.3		331.9	
1997	37	73	Henry	14	Central	Mostly Rural	50.3	63320			119		229				187.9		361.7	
1997	38	75	Iroquois	21	Central	Mostly Rural	71.7	39328			134		231				340.7		587.4	
1997	39	77	Jackson	1	Southern	Mostly Urban	37.2	71817			450		628				626.6		874.4	
1997	40	79	Jasper	4	Southern	Mostly Rural	69.9	13059			59		135				451.8		1033.8	
1997	41	81	Jefferson	2	Southern	Mostly Rural	58.8	49040			179		286				365		583.2	
1997	42	83	Jersey	7	Southern	Mostly Rural	60.6	26722			46		123				172.1		460.3	
1997	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27357			52		175				190.1		639.7	
1997	44	87	Johnson	1	Southern	Completely Rural	100	14903			35		75				234.9		503.3	
1997	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	485729			1401		1809				288.4		372.4	
1997	46	91	Kankakee	21	Central	Mostly Urban	24.5	130035			460		513				353.8		394.5	
1997	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	63050			150		312				237.9		494.8	
1997	48	95	Knox	9	Central	Mostly Urban	24.3	68163			186		267				272.9		391.7	
1997	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	779287			1418		2457				182		315.3	
1997	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	137727			475		688				344.9		499.5	
1997	51	101	Lawrence	2	Southern	Mostly Rural	58	19303			51		139				264.2		720.1	
1997	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	44766			138		360				308.3		804.2	
1997	53	105	Livingston	11	Central	Mostly Urban	40.8	49335			114		193				231.1		391.2	
1997	54	107	Logan	11	Central	Mostly Urban	39.9	37745			149		446				394.8		1181.6	
1997	55	109	McDonough	9	Central	Mostly Urban	29.5	39207			69		107				176		272.9	
1997	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	312152			456		712				146.1		228.1	
1997	57	113	McLean	11	Central	Mostly Urban	16.5	176984			619		1037				349.7		585.9	
1997	58	115	Macon	6	Central	Mostly Urban	15.3	143480			942		1219				656.5		849.6	
1997	59	117	Macoupin	7	Central	Mostly Rural	58.5	60457			161		736				266.3		1217.4	
1997	60	119	Madison	3	Southern	Mostly Urban	13.3	320683			1119		1331				348.9		415.1	
1997	61	121	Marion	4	Southern	Mostly Urban	45.1	52412			254		766				484.6		1461.5	
1997	62	123	Marshall	10	Central	Completely Rural	100	15991			44		107				275.2		669.1	
1997	63	125	Mason	8	Central	Mostly Rural	77.5	20181			93		185				460.8		916.7	
1997	64	127	Massac	1	Southern	Mostly Rural	50.5	18769			78		143				415.6		761.9	
1997	65	129	Menard	8	Central	Mostly Rural	75.7	15378			39		75				253.6		487.7	
1997	66	131	Mercer	14	Central	Mostly Rural	77.8	21095			67		99				317.6		469.3	
1997	67	133	Monroe	20	Southern	Mostly Urban	41.4	32463			53		60				163.3		184.8	
1997	68	135	Montgomery	4	Central	Mostly Urban	41.6	38198			105		462				274.9		1209.5	
1997	69	137	Morgan	7	Central	Mostly Urban	36.2	44929			146		268				325		596.5	
1997	70	139	Moultrie	6	Central	Mostly Rural	69.2	17733			38		118				214.3		665.4	
1997	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	63155			121		229				191.6		362.6	
1997	72	143	Peoria	10	Central	Mostly Urban	14.6	229327			1193		1732				520.2		755.3	
1997	73	145	Perry	20	Southern	Mostly Urban	43.6	26379			45		102				170.6		386.7	
1997	74	147	Piatt	6	Central	Mostly Rural	67.7	20222			28		110				138.5		544	
1997	75	149	Pike	8	Central	Mostly Rural	72.3	21674			111		275				512.1		1268.8	
1997	76	151	Pope	1	Southern	Completely Rural	100	5272			17		60				322.5		1138.1	
1997	77	153	Pulaski	1	Southern	Completely Rural	100	9298			52		94				559.3		1011	
1997	78	155	Putnam	10	Central	Completely Rural	100	7397			11		112				148.7		1514.1	
1997	79	157	Randolph	20	Southern	Mostly Urban	42.6	41224			82		116				198.9		281.4	
1997	80	159	Richland	2	Southern	Mostly Urban	43.5	20455			18		203				88		992.4	
1997	81	161	Rock Island	14	Central	Mostly Urban	10.9	184629			1200		2194				650		1188.3	
1997	82	163	St. Clair	20	Southern	Mostly Urban	9.8	330529			922		1173				278.9		354.9	
1997	83	165	Saline	1	Southern	Mostly Urban	43.7	32961			125		336				379.2		1019.4	
1997	84	167	Sangamon	7	Central	Mostly Urban	14.1	235348			632		984				268.5		418.1	
1997	85	169	Schuyler	8	Central	Mostly Rural	57.6	9081			14		70				154.2		770.8	
1997	86	171	Scott	7	Central	Completely Rural	100	6887			5		14				72.6		203.3	
1997	87	173	Shelby	4	Central	Mostly Rural	77.7	28623			30		117				104.8		408.8	
1997	88	175	Stark	10	Central	Completely Rural	100	7949			23		145				289.3		1824.1	
1997	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	61290			355		462				579.2		753.8	
1997	90	179	Tazewell	10	Central	Mostly Urban	20.4	158445			404		826				255		521.3	
1997	91	181	Union	1	Southern	Mostly Rural	65.9	22347			75		172				335.6		769.7	
1997	92	183	Vermilion	5	Central	Mostly Urban	31.3	105876			520		1126				491.1		1063.5	
1997	93	185	Wabash	2	Southern	Mostly Urban	38.9	16083			50		84				310.9		522.3	
1997	94	187	Warren	9	Central	Mostly Urban	45.5	23278			70		126				300.7		541.3	
1997	95	189	Washington	20	Southern	Mostly Rural	73.6	19008			42		67				221		352.5	
1997	96	191	Wayne	2	Southern	Mostly Rural	69.9	21063			57		132				270.6		626.7	
1997	97	193	White	2	Southern	Mostly Rural	62	18869			93		285				492.9		1510.4	
1997	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	75674			342		545				451.9		720.2	
1997	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	580062			1062		1160				183.1		200	
1997	100	199	Williamson	1	Southern	Mostly Urban	34.8	74739			197		441				263.6		590.1	
1997	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	342531			1588		3696				463.6		1079	
1997	102	203	Woodford	11	Central	Mostly Rural	54.9	43860			91		280				207.5		638.4	
1998	1	1	Adams	8	Central	Mostly Urban	32.6	85013			336		551				395.2		648.1	
1998	2	3	Alexander	1	Southern	Mostly Rural	61.9	12052			80		157				663.8		1302.7	
1998	3	5	Bond	3	Southern	Mostly Rural	60.7	21275			58		149				272.6		700.4	
1998	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	51036			168		545				329.2		1067.9	
1998	5	9	Brown	8	Central	Mostly Urban	41.1	8083			18		58				222.7		717.6	
1998	6	11	Bureau	13	Central	Mostly Rural	57.4	43988			53		191				120.5		434.2	
1998	7	13	Calhoun	8	Southern	Completely Rural	100	6196			10		48				161.4		774.7	
1998	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20869			44		116				210.8		555.8	
1998	9	17	Cass	8	Central	Mostly Rural	52.1	16946			75		144				442.6		849.8	
1998	10	19	Champaign	6	Central	Mostly Urban	12.7	213127			829		1347				389		632	
1998	11	21	Christian	4	Central	Mostly Urban	43.5	43691			220		705				503.5		1613.6	
1998	12	23	Clark	5	Southern	Mostly Rural	59.5	20941			88		111				420.2		530.1	
1998	13	25	Clay	4	Southern	Mostly Rural	64.7	18069			69		245				381.9		1355.9	
1998	14	27	Clinton	4	Southern	Mostly Urban	48.8	44087			91		227				206.4		514.9	
1998	15	29	Coles	5	Central	Mostly Urban	24.3	63563			226		469				355.6		737.9	
1998	16	31	Cook	co	Northern - Cook	Completely Urban	0	6662832			22792		35461				342.1		532.2	
1998	17	33	Crawford	2	Southern	Mostly Rural	60.2	25241			88		347				348.6		1374.7	
1998	18	35	Cumberland	5	Southern	Completely Rural	100	13996			16		26				114.3		185.8	
1998	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	105257			242		310				229.9		294.5	
1998	20	39	De Witt	6	Central	Mostly Urban	48.8	20722			111		338				535.7		1631.1	
1998	21	41	Douglas	6	Central	Mostly Rural	61.6	25026			49		226				195.8		903.1	
1998	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1111765			1421		2534				127.8		227.9	
1998	23	45	Edgar	5	Central	Mostly Rural	51.8	24592			183		312				744.1		1268.7	
1998	24	47	Edwards	2	Southern	Completely Rural	100	8570			25		93				291.7		1085.2	
1998	25	49	Effingham	4	Southern	Mostly Rural	59.7	43211			148		515				342.5		1191.8	
1998	26	51	Fayette	4	Southern	Mostly Rural	67	26868			88		363				327.5		1351	
1998	27	53	Ford	11	Central	Mostly Urban	41.8	17725			36		158				203.1		891.4	
1998	28	55	Franklin	2	Southern	Mostly Urban	48.6	47980			188		385				391.8		802.4	
1998	29	57	Fulton	9	Central	Mostly Rural	60	46612			192		370				411.9		793.8	
1998	30	59	Gallatin	2	Southern	Completely Rural	100	7879			40		70				507.7		888.4	
1998	31	61	Greene	7	Central	Mostly Rural	70.8	18626			11		97				59.1		520.8	
1998	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	46036			79		113				171.6		245.5	
1998	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10665			10		89				93.8		834.5	
1998	34	67	Hancock	9	Central	Mostly Rural	71	25357			28		30				110.4		118.3	
1998	35	69	Hardin	2	Southern	Completely Rural	100	5803			25		69				430.8		1189	
1998	36	71	Henderson	9	Central	Mostly Rural	99.7	10132			21		26				207.3		256.6	
1998	37	73	Henry	14	Central	Mostly Rural	50.3	63076			128		240				202.9		380.5	
1998	38	75	Iroquois	21	Central	Mostly Rural	71.7	39099			118		222				301.8		567.8	
1998	39	77	Jackson	1	Southern	Mostly Urban	37.2	71316			447		687				626.8		963.3	
1998	40	79	Jasper	4	Southern	Mostly Rural	69.9	12971			53		125				408.6		963.7	
1998	41	81	Jefferson	2	Southern	Mostly Rural	58.8	48965			168		304				343.1		620.9	
1998	42	83	Jersey	7	Southern	Mostly Rural	60.6	26914			48		118				178.3		438.4	
1998	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27097			43		171				158.7		631.1	
1998	44	87	Johnson	1	Southern	Completely Rural	100	15183			31		87				204.2		573	
1998	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	497264			1644		3234				330.6		650.4	
1998	46	91	Kankakee	21	Central	Mostly Urban	24.5	130057			506		573				389.1		440.6	
1998	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	65368			137		287				209.6		439.1	
1998	48	95	Knox	9	Central	Mostly Urban	24.3	68032			179		238				263.1		349.8	
1998	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	794345			1581		2650				199		333.6	
1998	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	138065			505		751				365.8		543.9	
1998	51	101	Lawrence	2	Southern	Mostly Rural	58	19075			53		140				277.9		733.9	
1998	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	44643			165		308				369.6		689.9	
1998	53	105	Livingston	11	Central	Mostly Urban	40.8	49069			132		204				269		415.7	
1998	54	107	Logan	11	Central	Mostly Urban	39.9	38074			154		368				404.5		966.5	
1998	55	109	McDonough	9	Central	Mostly Urban	29.5	39039			80		110				204.9		281.8	
1998	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	319743			444		680				138.9		212.7	
1998	57	113	McLean	11	Central	Mostly Urban	16.5	179416			722		1077				402.4		600.3	
1998	58	115	Macon	6	Central	Mostly Urban	15.3	142772			912		1186				638.8		830.7	
1998	59	117	Macoupin	7	Central	Mostly Rural	58.5	60129			186		768				309.3		1277.3	
1998	60	119	Madison	3	Southern	Mostly Urban	13.3	320211			1189		1482				371.3		462.8	
1998	61	121	Marion	4	Southern	Mostly Urban	45.1	52051			262		877				503.4		1684.9	
1998	62	123	Marshall	10	Central	Completely Rural	100	16028			48		118				299.5		736.2	
1998	63	125	Mason	8	Central	Mostly Rural	77.5	19989			79		196				395.2		980.5	
1998	64	127	Massac	1	Southern	Mostly Rural	50.5	18746			89		194				474.8		1034.9	
1998	65	129	Menard	8	Central	Mostly Rural	75.7	15364			25		70				162.7		455.6	
1998	66	131	Mercer	14	Central	Mostly Rural	77.8	20997			76		140				362		666.8	
1998	67	133	Monroe	20	Southern	Mostly Urban	41.4	33374			71		84				212.7		251.7	
1998	68	135	Montgomery	4	Central	Mostly Urban	41.6	38052			111		446				291.7		1172.1	
1998	69	137	Morgan	7	Central	Mostly Urban	36.2	44574			148		239				332		536.2	
1998	70	139	Moultrie	6	Central	Mostly Rural	69.2	17639			48		168				272.1		952.4	
1998	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	63416			115		228				181.3		359.5	
1998	72	143	Peoria	10	Central	Mostly Urban	14.6	228351			1180		1917				516.7		839.5	
1998	73	145	Perry	20	Southern	Mostly Urban	43.6	26153			78		122				298.2		466.5	
1998	74	147	Piatt	6	Central	Mostly Rural	67.7	20077			33		102				164.4		508	
1998	75	149	Pike	8	Central	Mostly Rural	72.3	21632			87		297				402.2		1373	
1998	76	151	Pope	1	Southern	Completely Rural	100	5237			15		52				286.4		992.9	
1998	77	153	Pulaski	1	Southern	Completely Rural	100	9370			56		106				597.7		1131.3	
1998	78	155	Putnam	10	Central	Completely Rural	100	7406			9		113				121.5		1525.8	
1998	79	157	Randolph	20	Southern	Mostly Urban	42.6	40922			94		128				229.7		312.8	
1998	80	159	Richland	2	Southern	Mostly Urban	43.5	20242			18		130				88.9		642.2	
1998	81	161	Rock Island	14	Central	Mostly Urban	10.9	184233			1195		2316				648.6		1257.1	
1998	82	163	St. Clair	20	Southern	Mostly Urban	9.8	326766			1058		1268				323.8		388	
1998	83	165	Saline	1	Southern	Mostly Urban	43.7	32960			162		337				491.5		1022.5	
1998	84	167	Sangamon	7	Central	Mostly Urban	14.1	234556			686		1033				292.5		440.4	
1998	85	169	Schuyler	8	Central	Mostly Rural	57.6	8921			19		64				213		717.4	
1998	86	171	Scott	7	Central	Completely Rural	100	6866			3		10				43.7		145.6	
1998	87	173	Shelby	4	Central	Mostly Rural	77.7	28624			44		142				153.7		496.1	
1998	88	175	Stark	10	Central	Completely Rural	100	7939			22		137				277.1		1725.7	
1998	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	61037			411		534				673.4		874.9	
1998	90	179	Tazewell	10	Central	Mostly Urban	20.4	158384			453		908				286		573.3	
1998	91	181	Union	1	Southern	Mostly Rural	65.9	22270			57		137				255.9		615.2	
1998	92	183	Vermilion	5	Central	Mostly Urban	31.3	105290			672		1455				638.2		1381.9	
1998	93	185	Wabash	2	Southern	Mostly Urban	38.9	15948			64		129				401.3		808.9	
1998	94	187	Warren	9	Central	Mostly Urban	45.5	23179			79		113				340.8		487.5	
1998	95	189	Washington	20	Southern	Mostly Rural	73.6	18911			48		82				253.8		433.6	
1998	96	191	Wayne	2	Southern	Mostly Rural	69.9	20965			71		184				338.7		877.7	
1998	97	193	White	2	Southern	Mostly Rural	62	18665			91		280				487.5		1500.1	
1998	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	75289			319		493				423.7		654.8	
1998	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	600742			1080		1204				179.8		200.4	
1998	100	199	Williamson	1	Southern	Mostly Urban	34.8	74806			199		490				266		655	
1998	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	344209			1773		3861				515.1		1121.7	
1998	102	203	Woodford	11	Central	Mostly Rural	54.9	44178			97		304				219.6		688.1	
1999	1	1	Adams	8	Central	Mostly Urban	32.6	84543			279		512				330		605.6	
1999	2	3	Alexander	1	Southern	Mostly Rural	61.9	11976			80		165				668		1377.8	
1999	3	5	Bond	3	Southern	Mostly Rural	60.7	21150			56		147				264.8		695	
1999	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	52325			189		659				361.2		1259.4	
1999	5	9	Brown	8	Central	Mostly Urban	41.1	8099			19		65				234.6		802.6	
1999	6	11	Bureau	13	Central	Mostly Rural	57.4	43769			50		142				114.2		324.4	
1999	7	13	Calhoun	8	Southern	Completely Rural	100	6190			8		54				129.2		872.4	
1999	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20640			42		119				203.5		576.6	
1999	9	17	Cass	8	Central	Mostly Rural	52.1	17011			56		148				329.2		870	
1999	10	19	Champaign	6	Central	Mostly Urban	12.7	214631			800		1249				372.7		581.9	
1999	11	21	Christian	4	Central	Mostly Urban	43.5	43476			251		775				577.3		1782.6	
1999	12	23	Clark	5	Southern	Mostly Rural	59.5	21004			142		208				676.1		990.3	
1999	13	25	Clay	4	Southern	Mostly Rural	64.7	17839			66		219				370		1227.6	
1999	14	27	Clinton	4	Southern	Mostly Urban	48.8	43921			78		243				177.6		553.3	
1999	15	29	Coles	5	Central	Mostly Urban	24.3	63432			252		537				397.3		846.6	
1999	16	31	Cook	co	Northern - Cook	Completely Urban	0	6687237			24133		38032				360.9		568.7	
1999	17	33	Crawford	2	Southern	Mostly Rural	60.2	25088			96		380				382.7		1514.7	
1999	18	35	Cumberland	5	Southern	Completely Rural	100	13974			19		35				136		250.5	
1999	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	107221			297		358				277		333.9	
1999	20	39	De Witt	6	Central	Mostly Urban	48.8	20651			79		232				382.5		1123.4	
1999	21	41	Douglas	6	Central	Mostly Rural	61.6	24944			47		182				188.4		729.6	
1999	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1126132			1351		2335				120		207.3	
1999	23	45	Edgar	5	Central	Mostly Rural	51.8	24283			202		305				831.9		1256	
1999	24	47	Edwards	2	Southern	Completely Rural	100	8465			31		71				366.2		838.7	
1999	25	49	Effingham	4	Southern	Mostly Rural	59.7	43433			133		409				306.2		941.7	
1999	26	51	Fayette	4	Southern	Mostly Rural	67	26696			117		440				438.3		1648.2	
1999	27	53	Ford	11	Central	Mostly Urban	41.8	17746			25		135				140.9		760.7	
1999	28	55	Franklin	2	Southern	Mostly Urban	48.6	47627			204		430				428.3		902.8	
1999	29	57	Fulton	9	Central	Mostly Rural	60	46462			174		322				374.5		693	
1999	30	59	Gallatin	2	Southern	Completely Rural	100	7819			44		77				562.7		984.8	
1999	31	61	Greene	7	Central	Mostly Rural	70.8	18406			14		87				76.1		472.7	
1999	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	46446			97		139				208.8		299.3	
1999	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10637			16		81				150.4		761.5	
1999	34	67	Hancock	9	Central	Mostly Rural	71	24971			26		43				104.1		172.2	
1999	35	69	Hardin	2	Southern	Completely Rural	100	5742			23		71				400.6		1236.5	
1999	36	71	Henderson	9	Central	Mostly Rural	99.7	10003			19		27				189.9		269.9	
1999	37	73	Henry	14	Central	Mostly Rural	50.3	63207			144		261				227.8		412.9	
1999	38	75	Iroquois	21	Central	Mostly Rural	71.7	38923			108		237				277.5		608.9	
1999	39	77	Jackson	1	Southern	Mostly Urban	37.2	70883			389		621				548.8		876.1	
1999	40	79	Jasper	4	Southern	Mostly Rural	69.9	12761			49		113				384		885.5	
1999	41	81	Jefferson	2	Southern	Mostly Rural	58.8	49192			189		313				384.2		636.3	
1999	42	83	Jersey	7	Southern	Mostly Rural	60.6	26852			50		119				186.2		443.2	
1999	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27132			50		164				184.3		604.5	
1999	44	87	Johnson	1	Southern	Completely Rural	100	14994			34		77				226.8		513.5	
1999	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	510300			1604		2168				314.3		424.8	
1999	46	91	Kankakee	21	Central	Mostly Urban	24.5	130388			499		613				382.7		470.1	
1999	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	67641			132		241				195.1		356.3	
1999	48	95	Knox	9	Central	Mostly Urban	24.3	67741			144		184				212.6		271.6	
1999	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	809374			1759		2879				217.3		355.7	
1999	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	138118			501		723				362.7		523.5	
1999	51	101	Lawrence	2	Southern	Mostly Rural	58	18872			77		171				408		906.1	
1999	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	44351			166		368				374.3		829.7	
1999	53	105	Livingston	11	Central	Mostly Urban	40.8	49179			130		252				264.3		512.4	
1999	54	107	Logan	11	Central	Mostly Urban	39.9	37747			164		438				434.5		1160.4	
1999	55	109	McDonough	9	Central	Mostly Urban	29.5	38734			78		102				201.4		263.3	
1999	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	328632			415		617				126.3		187.7	
1999	57	113	McLean	11	Central	Mostly Urban	16.5	182451			819		1221				448.9		669.2	
1999	58	115	Macon	6	Central	Mostly Urban	15.3	142094			771		1076				542.6		757.2	
1999	59	117	Macoupin	7	Central	Mostly Rural	58.5	60363			196		647				324.7		1071.8	
1999	60	119	Madison	3	Southern	Mostly Urban	13.3	319747			1194		1396				373.4		436.6	
1999	61	121	Marion	4	Southern	Mostly Urban	45.1	51659			278		963				538.1		1864.1	
1999	62	123	Marshall	10	Central	Completely Rural	100	16093			49		128				304.5		795.4	
1999	63	125	Mason	8	Central	Mostly Rural	77.5	19797			73		158				368.7		798.1	
1999	64	127	Massac	1	Southern	Mostly Rural	50.5	18572			82		184				441.5		990.7	
1999	65	129	Menard	8	Central	Mostly Rural	75.7	15465			17		68				109.9		439.7	
1999	66	131	Mercer	14	Central	Mostly Rural	77.8	20901			80		214				382.8		1023.9	
1999	67	133	Monroe	20	Southern	Mostly Urban	41.4	34063			57		67				167.3		196.7	
1999	68	135	Montgomery	4	Central	Mostly Urban	41.6	37618			135		514				358.9		1366.4	
1999	69	137	Morgan	7	Central	Mostly Urban	36.2	44358			133		284				299.8		640.2	
1999	70	139	Moultrie	6	Central	Mostly Rural	69.2	17642			39		132				221.1		748.2	
1999	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	63861			101		229				158.2		358.6	
1999	72	143	Peoria	10	Central	Mostly Urban	14.6	228045			1120		1815				491.1		795.9	
1999	73	145	Perry	20	Southern	Mostly Urban	43.6	28043			71		102				253.2		363.7	
1999	74	147	Piatt	6	Central	Mostly Rural	67.7	20252			29		158				143.2		780.2	
1999	75	149	Pike	8	Central	Mostly Rural	72.3	21476			62		319				288.7		1485.4	
1999	76	151	Pope	1	Southern	Completely Rural	100	5219			12		70				229.9		1341.3	
1999	77	153	Pulaski	1	Southern	Completely Rural	100	9332			45		103				482.2		1103.7	
1999	78	155	Putnam	10	Central	Completely Rural	100	7505			11		202				146.6		2691.5	
1999	79	157	Randolph	20	Southern	Mostly Urban	42.6	41011			101		139				246.3		338.9	
1999	80	159	Richland	2	Southern	Mostly Urban	43.5	19961			37		109				185.4		546.1	
1999	81	161	Rock Island	14	Central	Mostly Urban	10.9	183765			1187		2364				645.9		1286.4	
1999	82	163	St. Clair	20	Southern	Mostly Urban	9.8	323537			1065		1294				329.2		400	
1999	83	165	Saline	1	Southern	Mostly Urban	43.7	32821			131		328				399.1		999.4	
1999	84	167	Sangamon	7	Central	Mostly Urban	14.1	233599			598		931				256		398.5	
1999	85	169	Schuyler	8	Central	Mostly Rural	57.6	8794			20		69				227.4		784.6	
1999	86	171	Scott	7	Central	Completely Rural	100	6817			3		13				44		190.7	
1999	87	173	Shelby	4	Central	Mostly Rural	77.7	28437			62		162				218		569.7	
1999	88	175	Stark	10	Central	Completely Rural	100	7878			16		165				203.1		2094.4	
1999	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	60937			432		535				708.9		878	
1999	90	179	Tazewell	10	Central	Mostly Urban	20.4	158314			453		977				286.1		617.1	
1999	91	181	Union	1	Southern	Mostly Rural	65.9	22348			64		150				286.4		671.2	
1999	92	183	Vermilion	5	Central	Mostly Urban	31.3	104238			630		1144				604.4		1097.5	
1999	93	185	Wabash	2	Southern	Mostly Urban	38.9	15907			79		151				496.6		949.3	
1999	94	187	Warren	9	Central	Mostly Urban	45.5	23020			65		95				282.4		412.7	
1999	95	189	Washington	20	Southern	Mostly Rural	73.6	18752			50		93				266.6		495.9	
1999	96	191	Wayne	2	Southern	Mostly Rural	69.9	21047			73		178				346.8		845.7	
1999	97	193	White	2	Southern	Mostly Rural	62	18544			81		217				436.8		1170.2	
1999	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	75051			359		492				478.3		655.6	
1999	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	624726			938		1038				150.1		166.2	
1999	100	199	Williamson	1	Southern	Mostly Urban	34.8	74830			192		556				256.6		743	
1999	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	345984			2072		4071				598.9		1176.6	
1999	102	203	Woodford	11	Central	Mostly Rural	54.9	44444			115		526				258.8		1183.5	
2000	1	1	Adams	8	Central	Mostly Urban	32.6	84093			272		561				323.5		667.1	
2000	2	3	Alexander	1	Southern	Mostly Rural	61.9	12037			64		130				531.7		1080	
2000	3	5	Bond	3	Southern	Mostly Rural	60.7	21279			60		169				282		794.2	
2000	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	53910			165		640				306.1		1187.2	
2000	5	9	Brown	8	Central	Mostly Urban	41.1	8125			12		37				147.7		455.4	
2000	6	11	Bureau	13	Central	Mostly Rural	57.4	43608			59		160				135.3		366.9	
2000	7	13	Calhoun	8	Southern	Completely Rural	100	6175			13		69				210.5		1117.4	
2000	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20335			56		125				275.4		614.7	
2000	9	17	Cass	8	Central	Mostly Rural	52.1	16865			46		128				272.8		759	
2000	10	19	Champaign	6	Central	Mostly Urban	12.7	215729			776		1170				359.7		542.3	
2000	11	21	Christian	4	Central	Mostly Urban	43.5	43431			244		783				561.8		1802.9	
2000	12	23	Clark	5	Southern	Mostly Rural	59.5	20926			97		133				463.5		635.6	
2000	13	25	Clay	4	Southern	Mostly Rural	64.7	17649			59		198				334.3		1121.9	
2000	14	27	Clinton	4	Southern	Mostly Urban	48.8	43888			78		210				177.7		478.5	
2000	15	29	Coles	5	Central	Mostly Urban	24.3	62848			321		644				510.8		1024.7	
2000	16	31	Cook	co	Northern - Cook	Completely Urban	0	6692296			26602		40807				397.5		609.8	
2000	17	33	Crawford	2	Southern	Mostly Rural	60.2	24777			123		448				496.4		1808.1	
2000	18	35	Cumberland	5	Southern	Completely Rural	100	14110			22		36				155.9		255.1	
2000	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	108639			267		324				245.8		298.2	
2000	20	39	De Witt	6	Central	Mostly Urban	48.8	20666			102		316				493.6		1529.1	
2000	21	41	Douglas	6	Central	Mostly Rural	61.6	25003			50		189				200		755.9	
2000	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1135174			1388		2390				122.3		210.5	
2000	23	45	Edgar	5	Central	Mostly Rural	51.8	23957			233		340				972.6		1419.2	
2000	24	47	Edwards	2	Southern	Completely Rural	100	8467			21		64				248		755.9	
2000	25	49	Effingham	4	Southern	Mostly Rural	59.7	43431			122		333				280.9		766.7	
2000	26	51	Fayette	4	Southern	Mostly Rural	67	26695			112		415				419.6		1554.6	
2000	27	53	Ford	11	Central	Mostly Urban	41.8	17626			30		142				170.2		805.6	
2000	28	55	Franklin	2	Southern	Mostly Urban	48.6	47404			168		389				354.4		820.6	
2000	29	57	Fulton	9	Central	Mostly Rural	60	46113			160		287				347		622.4	
2000	30	59	Gallatin	2	Southern	Completely Rural	100	7724			43		90				556.7		1165.2	
2000	31	61	Greene	7	Central	Mostly Rural	70.8	18272			62		106				339.3		580.1	
2000	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	47122			119		157				252.5		333.2	
2000	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10538			27		104				256.2		986.9	
2000	34	67	Hancock	9	Central	Mostly Rural	71	24775			18		31				72.7		125.1	
2000	35	69	Hardin	2	Southern	Completely Rural	100	5668			25		84				441.1		1482	
2000	36	71	Henderson	9	Central	Mostly Rural	99.7	9932			16		21				161.1		211.4	
2000	37	73	Henry	14	Central	Mostly Rural	50.3	63158			121		205				191.6		324.6	
2000	38	75	Iroquois	21	Central	Mostly Rural	71.7	38870			119		228				306.1		586.6	
2000	39	77	Jackson	1	Southern	Mostly Urban	37.2	70257			377		653				536.6		929.4	
2000	40	79	Jasper	4	Southern	Mostly Rural	69.9	12485			29		89				232.3		712.9	
2000	41	81	Jefferson	2	Southern	Mostly Rural	58.8	49212			185		305				375.9		619.8	
2000	42	83	Jersey	7	Southern	Mostly Rural	60.6	26773			59		130				220.4		485.6	
2000	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27113			47		184				173.3		678.6	
2000	44	87	Johnson	1	Southern	Completely Rural	100	15063			33		70				219.1		464.7	
2000	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	524626			1663		2201				317		419.5	
2000	46	91	Kankakee	21	Central	Mostly Urban	24.5	130329			474		624				363.7		478.8	
2000	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	70741			147		342				207.8		483.5	
2000	48	95	Knox	9	Central	Mostly Urban	24.3	67358			128		179				190		265.7	
2000	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	828610			1758		3046				212.2		367.6	
2000	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	137957			490		712				355.2		516.1	
2000	51	101	Lawrence	2	Southern	Mostly Rural	58	18703			88		200				470.5		1069.3	
2000	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	44286			158		325				356.8		733.9	
2000	53	105	Livingston	11	Central	Mostly Urban	40.8	49105			134		285				272.9		580.4	
2000	54	107	Logan	11	Central	Mostly Urban	39.9	37574			207		477				550.9		1269.5	
2000	55	109	McDonough	9	Central	Mostly Urban	29.5	38215			62		86				162.2		225	
2000	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	335666			364		541				108.4		161.2	
2000	57	113	McLean	11	Central	Mostly Urban	16.5	184298			869		1316				471.5		714.1	
2000	58	115	Macon	6	Central	Mostly Urban	15.3	140995			657		979				466		694.4	
2000	59	117	Macoupin	7	Central	Mostly Rural	58.5	60191			192		504				319		837.3	
2000	60	119	Madison	3	Southern	Mostly Urban	13.3	319794			1257		1468				393.1		459	
2000	61	121	Marion	4	Southern	Mostly Urban	45.1	51591			269		969				521.4		1878.2	
2000	62	123	Marshall	10	Central	Completely Rural	100	16036			25		66				155.9		411.6	
2000	63	125	Mason	8	Central	Mostly Rural	77.5	19649			67		146				341		743	
2000	64	127	Massac	1	Southern	Mostly Rural	50.5	18385			71		168				386.2		913.8	
2000	65	129	Menard	8	Central	Mostly Rural	75.7	15565			18		73				115.6		469	
2000	66	131	Mercer	14	Central	Mostly Rural	77.8	20843			50		128				239.9		614.1	
2000	67	133	Monroe	20	Southern	Mostly Urban	41.4	34665			56		62				161.5		178.9	
2000	68	135	Montgomery	4	Central	Mostly Urban	41.6	37441			150		554				400.6		1479.7	
2000	69	137	Morgan	7	Central	Mostly Urban	36.2	44382			134		325				301.9		732.3	
2000	70	139	Moultrie	6	Central	Mostly Rural	69.2	17792			58		170				326		955.5	
2000	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	64485			117		241				181.4		373.7	
2000	72	143	Peoria	10	Central	Mostly Urban	14.6	226503			978		1496				431.8		660.5	
2000	73	145	Perry	20	Southern	Mostly Urban	43.6	27776			59		95				212.4		342	
2000	74	147	Piatt	6	Central	Mostly Rural	67.7	20242			26		147				128.4		726.2	
2000	75	149	Pike	8	Central	Mostly Rural	72.3	21214			69		381				325.3		1796	
2000	76	151	Pope	1	Southern	Completely Rural	100	5253			14		82				266.5		1561	
2000	77	153	Pulaski	1	Southern	Completely Rural	100	9168			48		101				523.6		1101.7	
2000	78	155	Putnam	10	Central	Completely Rural	100	7482			5		158				66.8		2111.7	
2000	79	157	Randolph	20	Southern	Mostly Urban	42.6	40939			96		129				234.5		315.1	
2000	80	159	Richland	2	Southern	Mostly Urban	43.5	19949			57		140				285.7		701.8	
2000	81	161	Rock Island	14	Central	Mostly Urban	10.9	182337			1123		2266				615.9		1242.8	
2000	82	163	St. Clair	20	Southern	Mostly Urban	9.8	323360			1011		1252				312.7		387.2	
2000	83	165	Saline	1	Southern	Mostly Urban	43.7	32428			114		294				351.5		906.6	
2000	84	167	Sangamon	7	Central	Mostly Urban	14.1	233462			560		965				239.9		413.3	
2000	85	169	Schuyler	8	Central	Mostly Rural	57.6	8743			21		69				240.2		789.2	
2000	86	171	Scott	7	Central	Completely Rural	100	6851												
2000	87	173	Shelby	4	Central	Mostly Rural	77.7	28229			53		167				187.8		591.6	
2000	88	175	Stark	10	Central	Completely Rural	100	7811			19		97				243.2		1241.8	
2000	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	60498			417		522				689.3		862.8	
2000	90	179	Tazewell	10	Central	Mostly Urban	20.4	157965			500		1104				316.5		698.9	
2000	91	181	Union	1	Southern	Mostly Rural	65.9	22232			65		134				292.4		602.7	
2000	92	183	Vermilion	5	Central	Mostly Urban	31.3	103484			481		844				464.8		815.6	
2000	93	185	Wabash	2	Southern	Mostly Urban	38.9	15799			70		131				443.1		829.2	
2000	94	187	Warren	9	Central	Mostly Urban	45.5	22727			51		81				224.4		356.4	
2000	95	189	Washington	20	Southern	Mostly Rural	73.6	18736			48		85				256.2		453.7	
2000	96	191	Wayne	2	Southern	Mostly Rural	69.9	20903			67		173				320.5		827.6	
2000	97	193	White	2	Southern	Mostly Rural	62	18417			89		238				483.2		1292.3	
2000	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	74844			337		495				450.3		661.4	
2000	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	652030			963		1078				147.7		165.3	
2000	100	199	Williamson	1	Southern	Mostly Urban	34.8	74463			217		627				291.4		842	
2000	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	348450			2031		4067				582.9		1167.2	
2000	102	203	Woodford	11	Central	Mostly Rural	54.9	44404			119		577				268		1299.4	
2001	1	1	Adams	8	Central	Mostly Urban	32.6	83721			286		591				341.6		705.9	
2001	2	3	Alexander	1	Southern	Mostly Rural	61.9	11880			69		142				580.8		1195.3	
2001	3	5	Bond	3	Southern	Mostly Rural	60.7	21142			77		187				364.2		884.5	
2001	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	55352			127		564				229.4		1018.9	
2001	5	9	Brown	8	Central	Mostly Urban	41.1	8099			6		25				74.1		308.7	
2001	6	11	Bureau	13	Central	Mostly Rural	57.4	43244			62		146				143.4		337.6	
2001	7	13	Calhoun	8	Southern	Completely Rural	100	6103			25		90				409.6		1474.7	
2001	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	20006			55		103				274.9		514.8	
2001	9	17	Cass	8	Central	Mostly Rural	52.1	16904			62		136				366.8		804.5	
2001	10	19	Champaign	6	Central	Mostly Urban	12.7	217492			778		1215				357.7		558.6	
2001	11	21	Christian	4	Central	Mostly Urban	43.5	43251			244		781				564.1		1805.7	
2001	12	23	Clark	5	Southern	Mostly Rural	59.5	20743			76		112				366.4		539.9	
2001	13	25	Clay	4	Southern	Mostly Rural	64.7	17446			55		199				315.3		1140.7	
2001	14	27	Clinton	4	Southern	Mostly Urban	48.8	44140			75		220				169.9		498.4	
2001	15	29	Coles	5	Central	Mostly Urban	24.3	62186			380		645				611.1		1037.2	
2001	16	31	Cook	co	Northern - Cook	Completely Urban	0	6669357			27091		42633				406.2		639.2	
2001	17	33	Crawford	2	Southern	Mostly Rural	60.2	24709			147		443				594.9		1792.9	
2001	18	35	Cumberland	5	Southern	Completely Rural	100	13986			26		46				185.9		328.9	
2001	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	110070			284		357				258		324.3	
2001	20	39	De Witt	6	Central	Mostly Urban	48.8	20666			114		449				551.6		2172.7	
2001	21	41	Douglas	6	Central	Mostly Rural	61.6	25082			73		278				291		1108.4	
2001	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1140856			1483		2493				130		218.5	
2001	23	45	Edgar	5	Central	Mostly Rural	51.8	23830			320		494				1342.8		2073	
2001	24	47	Edwards	2	Southern	Completely Rural	100	8364			14		60				167.4		717.4	
2001	25	49	Effingham	4	Southern	Mostly Rural	59.7	43501			154		344				354		790.8	
2001	26	51	Fayette	4	Southern	Mostly Rural	67	26536			121		484				456		1823.9	
2001	27	53	Ford	11	Central	Mostly Urban	41.8	17558			42		160				239.2		911.3	
2001	28	55	Franklin	2	Southern	Mostly Urban	48.6	47222			165		376				349.4		796.2	
2001	29	57	Fulton	9	Central	Mostly Rural	60	45662			173		267				378.9		584.7	
2001	30	59	Gallatin	2	Southern	Completely Rural	100	7561			44		92				581.9		1216.8	
2001	31	61	Greene	7	Central	Mostly Rural	70.8	18117			68		116				375.3		640.3	
2001	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	47946			124		161				258.6		335.8	
2001	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10434			22		116				210.8		1111.8	
2001	34	67	Hancock	9	Central	Mostly Rural	71	24569			32		47				130.2		191.3	
2001	35	69	Hardin	2	Southern	Completely Rural	100	5670			37		99				652.6		1746	
2001	36	71	Henderson	9	Central	Mostly Rural	99.7	9900			16		25				161.6		252.5	
2001	37	73	Henry	14	Central	Mostly Rural	50.3	62535			113		189				180.7		302.2	
2001	38	75	Iroquois	21	Central	Mostly Rural	71.7	38309			117		193				305.4		503.8	
2001	39	77	Jackson	1	Southern	Mostly Urban	37.2	69949			470		855				671.9		1222.3	
2001	40	79	Jasper	4	Southern	Mostly Rural	69.9	12440			46		132				369.8		1061.1	
2001	41	81	Jefferson	2	Southern	Mostly Rural	58.8	48882			186		272				380.5		556.4	
2001	42	83	Jersey	7	Southern	Mostly Rural	60.6	26835			82		173				305.6		644.7	
2001	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27297			49		167				179.5		611.8	
2001	44	87	Johnson	1	Southern	Completely Rural	100	15004			42		76				279.9		506.5	
2001	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	545560			1677		2281				307.4		418.1	
2001	46	91	Kankakee	21	Central	Mostly Urban	24.5	131075			476		627				363.2		478.4	
2001	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	74916			165		381				220.2		508.6	
2001	48	95	Knox	9	Central	Mostly Urban	24.3	66759			127		189				190.2		283.1	
2001	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	842354			1523		2615				180.8		310.4	
2001	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	138527			488		664				352.3		479.3	
2001	51	101	Lawrence	2	Southern	Mostly Rural	58	18780			90		206				479.2		1096.9	
2001	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	44216			148		313				334.7		707.9	
2001	53	105	Livingston	11	Central	Mostly Urban	40.8	49090			130		242				264.8		493	
2001	54	107	Logan	11	Central	Mostly Urban	39.9	37166			199		351				535.4		944.4	
2001	55	109	McDonough	9	Central	Mostly Urban	29.5	38069			74		104				194.4		273.2	
2001	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	343797			354		561				103		163.2	
2001	57	113	McLean	11	Central	Mostly Urban	16.5	186190			757		1194				406.6		641.3	
2001	58	115	Macon	6	Central	Mostly Urban	15.3	139748			647		1000				463		715.6	
2001	59	117	Macoupin	7	Central	Mostly Rural	58.5	59888			200		511				334		853.3	
2001	60	119	Madison	3	Southern	Mostly Urban	13.3	320810			1179		1410				367.5		439.5	
2001	61	121	Marion	4	Southern	Mostly Urban	45.1	51191			280		912				547		1781.6	
2001	62	123	Marshall	10	Central	Completely Rural	100	15731			28		67				178		425.9	
2001	63	125	Mason	8	Central	Mostly Rural	77.5	19663			61		128				310.2		651	
2001	64	127	Massac	1	Southern	Mostly Rural	50.5	18336			84		193				458.1		1052.6	
2001	65	129	Menard	8	Central	Mostly Rural	75.7	15587			18		67				115.5		429.8	
2001	66	131	Mercer	14	Central	Mostly Rural	77.8	20834			67		128				321.6		614.4	
2001	67	133	Monroe	20	Southern	Mostly Urban	41.4	35316			60		66				169.9		186.9	
2001	68	135	Montgomery	4	Central	Mostly Urban	41.6	37245			121		561				324.9		1506.2	
2001	69	137	Morgan	7	Central	Mostly Urban	36.2	43985			174		488				395.6		1109.5	
2001	70	139	Moultrie	6	Central	Mostly Rural	69.2	17743			70		201				394.5		1132.8	
2001	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	64639			117		264				181		408.4	
2001	72	143	Peoria	10	Central	Mostly Urban	14.6	225262			965		1380				428.4		612.6	
2001	73	145	Perry	20	Southern	Mostly Urban	43.6	27679			66		110				238.4		397.4	
2001	74	147	Piatt	6	Central	Mostly Rural	67.7	20151			23		159				114.1		789	
2001	75	149	Pike	8	Central	Mostly Rural	72.3	21050			38		397				180.5		1886	
2001	76	151	Pope	1	Southern	Completely Rural	100	5169			12		91				232.2		1760.5	
2001	77	153	Pulaski	1	Southern	Completely Rural	100	8878			51		99				574.5		1115.1	
2001	78	155	Putnam	10	Central	Completely Rural	100	7437												
2001	79	157	Randolph	20	Southern	Mostly Urban	42.6	41104			107		140				260.3		340.6	
2001	80	159	Richland	2	Southern	Mostly Urban	43.5	19792			80		195				404.2		985.2	
2001	81	161	Rock Island	14	Central	Mostly Urban	10.9	181691			1040		2182				572.4		1200.9	
2001	82	163	St. Clair	20	Southern	Mostly Urban	9.8	322853			1017		1270				315		393.4	
2001	83	165	Saline	1	Southern	Mostly Urban	43.7	31972			123		303				384.7		947.7	
2001	84	167	Sangamon	7	Central	Mostly Urban	14.1	234225			608		1167				259.6		498.2	
2001	85	169	Schuyler	8	Central	Mostly Rural	57.6	8631			32		97				370.8		1123.9	
2001	86	171	Scott	7	Central	Completely Rural	100	6844												
2001	87	173	Shelby	4	Central	Mostly Rural	77.7	27960			43		153				153.8		547.2	
2001	88	175	Stark	10	Central	Completely Rural	100	7808			28		96				358.6		1229.5	
2001	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	59972			341		466				568.6		777	
2001	90	179	Tazewell	10	Central	Mostly Urban	20.4	157872			569		1079				360.4		683.5	
2001	91	181	Union	1	Southern	Mostly Rural	65.9	22000			43		123				195.5		559.1	
2001	92	183	Vermilion	5	Central	Mostly Urban	31.3	103238			749		1278				725.5		1237.9	
2001	93	185	Wabash	2	Southern	Mostly Urban	38.9	15620			64		123				409.7		787.5	
2001	94	187	Warren	9	Central	Mostly Urban	45.5	22375			59		82				263.7		366.5	
2001	95	189	Washington	20	Southern	Mostly Rural	73.6	18842			44		83				233.5		440.5	
2001	96	191	Wayne	2	Southern	Mostly Rural	69.9	20813			66		182				317.1		874.5	
2001	97	193	White	2	Southern	Mostly Rural	62	18322			106		281				578.5		1533.7	
2001	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	74744			338		478				452.2		639.5	
2001	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	680859			1083		1200				159.1		176.2	
2001	100	199	Williamson	1	Southern	Mostly Urban	34.8	75009			220		723				293.3		963.9	
2001	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	349444			2072		3959				592.9		1132.9	
2001	102	203	Woodford	11	Central	Mostly Rural	54.9	44477			115		511				258.6		1148.9	
2002	1	1	Adams	8	Central	Mostly Urban	32.6	83348			313		611				375.5		733.1	
2002	2	3	Alexander	1	Southern	Mostly Rural	61.9	11834			76		149				642.2		1259.1	
2002	3	5	Bond	3	Southern	Mostly Rural	60.7	21321			75		186				351.8		872.4	
2002	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	57151			144		487				252		852.1	
2002	5	9	Brown	8	Central	Mostly Urban	41.1	7994			11		48				137.6		600.5	
2002	6	11	Bureau	13	Central	Mostly Rural	57.4	42991			69		177				160.5		411.7	
2002	7	13	Calhoun	8	Southern	Completely Rural	100	6016			32		78				531.9		1296.5	
2002	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	19844			51		100				257		503.9	
2002	9	17	Cass	8	Central	Mostly Rural	52.1	16720			74		147				442.6		879.2	
2002	10	19	Champaign	6	Central	Mostly Urban	12.7	219521			838		1214				381.7		553	
2002	11	21	Christian	4	Central	Mostly Urban	43.5	43163			147		302				340.6		699.7	
2002	12	23	Clark	5	Southern	Mostly Rural	59.5	20750			102		136				491.6		655.4	
2002	13	25	Clay	4	Southern	Mostly Rural	64.7	17457			73		190				418.2		1088.4	
2002	14	27	Clinton	4	Southern	Mostly Urban	48.8	44272			82		203				185.2		458.5	
2002	15	29	Coles	5	Central	Mostly Urban	24.3	62041			343		645				552.9		1039.6	
2002	16	31	Cook	co	Northern - Cook	Completely Urban	0	6619458			25283		41643				381.9		629.1	
2002	17	33	Crawford	2	Southern	Mostly Rural	60.2	24416			140		348				573.4		1425.3	
2002	18	35	Cumberland	5	Southern	Completely Rural	100	13834			34		63				245.8		455.4	
2002	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	111703			309		403				276.6		360.8	
2002	20	39	De Witt	6	Central	Mostly Urban	48.8	20465			102		288				498.4		1407.3	
2002	21	41	Douglas	6	Central	Mostly Rural	61.6	25051			100		302				399.2		1205.5	
2002	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1142433			1773		2779				155.2		243.3	
2002	23	45	Edgar	5	Central	Mostly Rural	51.8	23516			175		223				744.2		948.3	
2002	24	47	Edwards	2	Southern	Completely Rural	100	8347			33		81				395.4		970.4	
2002	25	49	Effingham	4	Southern	Mostly Rural	59.7	43269			157		520				362.8		1201.8	
2002	26	51	Fayette	4	Southern	Mostly Rural	67	26627			121		491				454.4		1844	
2002	27	53	Ford	11	Central	Mostly Urban	41.8	17525			36		144				205.4		821.7	
2002	28	55	Franklin	2	Southern	Mostly Urban	48.6	47394			170		330				358.7		696.3	
2002	29	57	Fulton	9	Central	Mostly Rural	60	45257			141		225				311.6		497.2	
2002	30	59	Gallatin	2	Southern	Completely Rural	100	7395			38		78				513.9		1054.8	
2002	31	61	Greene	7	Central	Mostly Rural	70.8	18008			65		104				361		577.5	
2002	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	48598			134		172				275.7		353.9	
2002	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10277			25		107				243.3		1041.2	
2002	34	67	Hancock	9	Central	Mostly Rural	71	24160			41		60				169.7		248.3	
2002	35	69	Hardin	2	Southern	Completely Rural	100	5614			26		94				463.1		1674.4	
2002	36	71	Henderson	9	Central	Mostly Rural	99.7	9807			20		24				203.9		244.7	
2002	37	73	Henry	14	Central	Mostly Rural	50.3	62102			133		205				214.2		330.1	
2002	38	75	Iroquois	21	Central	Mostly Rural	71.7	37954			134		289				353.1		761.4	
2002	39	77	Jackson	1	Southern	Mostly Urban	37.2	69237			539		1337				778.5		1931	
2002	40	79	Jasper	4	Southern	Mostly Rural	69.9	12356			56		127				453.2		1027.8	
2002	41	81	Jefferson	2	Southern	Mostly Rural	58.8	48762			194		284				397.9		582.4	
2002	42	83	Jersey	7	Southern	Mostly Rural	60.6	27083			76		148				280.6		546.5	
2002	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27184			65		176				239.1		647.4	
2002	44	87	Johnson	1	Southern	Completely Rural	100	14702			42		65				285.7		442.1	
2002	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	566611			1864		2461				329		434.3	
2002	46	91	Kankakee	21	Central	Mostly Urban	24.5	131480			514		669				390.9		508.8	
2002	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	80245			155		418				193.2		520.9	
2002	48	95	Knox	9	Central	Mostly Urban	24.3	66289			133		182				200.6		274.6	
2002	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	852682			1511		2601				177.2		305	
2002	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	137936			479		635				347.3		460.4	
2002	51	101	Lawrence	2	Southern	Mostly Rural	58	19285			99		210				513.4		1088.9	
2002	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43856			146		329				332.9		750.2	
2002	53	105	Livingston	11	Central	Mostly Urban	40.8	48616			138		252				283.9		518.3	
2002	54	107	Logan	11	Central	Mostly Urban	39.9	37028			189		342				510.4		923.6	
2002	55	109	McDonough	9	Central	Mostly Urban	29.5	38032			61		92				160.4		241.9	
2002	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	351998			378		582				107.4		165.3	
2002	57	113	McLean	11	Central	Mostly Urban	16.5	189753			648		1024				341.5		539.6	
2002	58	115	Macon	6	Central	Mostly Urban	15.3	138048			523		730				378.9		528.8	
2002	59	117	Macoupin	7	Central	Mostly Rural	58.5	59698			204		550				341.7		921.3	
2002	60	119	Madison	3	Southern	Mostly Urban	13.3	321274			1168		1363				363.6		424.2	
2002	61	121	Marion	4	Southern	Mostly Urban	45.1	50593			244		729				482.3		1440.9	
2002	62	123	Marshall	10	Central	Completely Rural	100	15737			34		86				216.1		546.5	
2002	63	125	Mason	8	Central	Mostly Rural	77.5	19454			61		141				313.6		724.8	
2002	64	127	Massac	1	Southern	Mostly Rural	50.5	18486			92		165				497.7		892.6	
2002	65	129	Menard	8	Central	Mostly Rural	75.7	15507			30		63				193.5		406.3	
2002	66	131	Mercer	14	Central	Mostly Rural	77.8	20819			59		103				283.4		494.7	
2002	67	133	Monroe	20	Southern	Mostly Urban	41.4	36271			65		72				179.2		198.5	
2002	68	135	Montgomery	4	Central	Mostly Urban	41.6	37170			152		603				408.9		1622.3	
2002	69	137	Morgan	7	Central	Mostly Urban	36.2	43869			178		466				405.8		1062.3	
2002	70	139	Moultrie	6	Central	Mostly Rural	69.2	17793			68		190				382.2		1067.8	
2002	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	64837			118		299				182		461.2	
2002	72	143	Peoria	10	Central	Mostly Urban	14.6	225410			884		1210				392.2		536.8	
2002	73	145	Perry	20	Southern	Mostly Urban	43.6	27279			56		86				205.3		315.3	
2002	74	147	Piatt	6	Central	Mostly Rural	67.7	19892			25		143				125.7		718.9	
2002	75	149	Pike	8	Central	Mostly Rural	72.3	20825			100		312				480.2		1498.2	
2002	76	151	Pope	1	Southern	Completely Rural	100	5106			20		86				391.7		1684.3	
2002	77	153	Pulaski	1	Southern	Completely Rural	100	8678			51		100				587.7		1152.3	
2002	78	155	Putnam	10	Central	Completely Rural	100	7427			24		60				323.1		807.9	
2002	79	157	Randolph	20	Southern	Mostly Urban	42.6	40380			117		143				289.7		354.1	
2002	80	159	Richland	2	Southern	Mostly Urban	43.5	19915			116		290				582.5		1456.2	
2002	81	161	Rock Island	14	Central	Mostly Urban	10.9	180928			984		2231				543.9		1233.1	
2002	82	163	St. Clair	20	Southern	Mostly Urban	9.8	324070			1052		1208				324.6		372.8	
2002	83	165	Saline	1	Southern	Mostly Urban	43.7	31764			151		347				475.4		1092.4	
2002	84	167	Sangamon	7	Central	Mostly Urban	14.1	234920			551		1062				234.5		452.1	
2002	85	169	Schuyler	8	Central	Mostly Rural	57.6	8674			37		99				426.6		1141.3	
2002	86	171	Scott	7	Central	Completely Rural	100	6765												
2002	87	173	Shelby	4	Central	Mostly Rural	77.7	27896			73		180				261.7		645.3	
2002	88	175	Stark	10	Central	Completely Rural	100	7738			22		46				284.3		594.5	
2002	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	59515			347		604				583		1014.9	
2002	90	179	Tazewell	10	Central	Mostly Urban	20.4	157959			649		1232				410.9		779.9	
2002	91	181	Union	1	Southern	Mostly Rural	65.9	22005			36		102				163.6		463.5	
2002	92	183	Vermilion	5	Central	Mostly Urban	31.3	102650			548		821				533.9		799.8	
2002	93	185	Wabash	2	Southern	Mostly Urban	38.9	15459			71		150				459.3		970.3	
2002	94	187	Warren	9	Central	Mostly Urban	45.5	22297			64		86				287		385.7	
2002	95	189	Washington	20	Southern	Mostly Rural	73.6	18642			26		59				139.5		316.5	
2002	96	191	Wayne	2	Southern	Mostly Rural	69.9	20714			82		189				395.9		912.4	
2002	97	193	White	2	Southern	Mostly Rural	62	18152			134		342				738.2		1884.1	
2002	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	74030			354		556				478.2		751	
2002	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	711577			1172		1278				164.7		179.6	
2002	100	199	Williamson	1	Southern	Mostly Urban	34.8	75453			237		661				314.1		876	
2002	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	350580			2113		4269				602.7		1217.7	
2002	102	203	Woodford	11	Central	Mostly Rural	54.9	44690			110		392				246.1		877.2	
2003	1	1	Adams	8	Central	Mostly Urban	32.6	82646	95	96	314	147	560	3	114.9	116.2	379.9	177.9	677.6	3.6
2003	2	3	Alexander	1	Southern	Mostly Rural	61.9	11450	74	10	62	40	128	16	646.3	87.3	541.5	349.3	1117.9	139.7
2003	3	5	Bond	3	Southern	Mostly Rural	60.7	21557	108	40	73	108	225	4	501	185.6	338.6	501	1043.7	18.6
2003	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	59267	288	227	163	151	560	19	485.9	383	275	254.8	944.9	32.1
2003	5	9	Brown	8	Central	Mostly Urban	41.1	8098	0	20	7	26	53	0	0	247	86.4	321.1	654.5	0
2003	6	11	Bureau	13	Central	Mostly Rural	57.4	42996	60	7	90	82	180	1	139.5	16.3	209.3	190.7	418.6	2.3
2003	7	13	Calhoun	8	Southern	Completely Rural	100	6172	22	11	25	45	91	10	356.4	178.2	405.1	729.1	1474.4	162
2003	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	19736	263	10	60	38	108	0	1332.6	50.7	304	192.5	547.2	0
2003	9	17	Cass	8	Central	Mostly Rural	52.1	16899	104	52	67	29	150	2	615.4	307.7	396.5	171.6	887.6	11.8
2003	10	19	Champaign	6	Central	Mostly Urban	12.7	222552	3060	51	841	292	1186	2	1375	22.9	377.9	131.2	532.9	0.9
2003	11	21	Christian	4	Central	Mostly Urban	43.5	43085	68	147	114	238	752	253	157.8	341.2	264.6	552.4	1745.4	587.2
2003	12	23	Clark	5	Southern	Mostly Rural	59.5	20652	97	25	108	35	169	1	469.7	121.1	523	169.5	818.3	4.8
2003	13	25	Clay	4	Southern	Mostly Rural	64.7	17402	58	44	96	67	220	13	333.3	252.8	551.7	385	1264.2	74.7
2003	14	27	Clinton	4	Southern	Mostly Urban	48.8	44493	432	45	87	114	255	9	970.9	101.1	195.5	256.2	573.1	20.2
2003	15	29	Coles	5	Central	Mostly Urban	24.3	62546	512	50	332	221	629	26	818.6	79.9	530.8	353.3	1005.7	41.6
2003	16	31	Cook	co	Northern - Cook	Completely Urban	0	6565964	8014	6528	25929	10050	43814	1307	122.1	99.4	394.9	153.1	667.3	19.9
2003	17	33	Crawford	2	Southern	Mostly Rural	60.2	24198	335	41	120	142	314	11	1384.4	169.4	495.9	586.8	1297.6	45.5
2003	18	35	Cumberland	5	Southern	Completely Rural	100	13633	14	8	30	15	53	0	102.7	58.7	220.1	110	388.8	0
2003	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	114120	218	31	319	101	457	6	191	27.2	279.5	88.5	400.5	5.3
2003	20	39	De Witt	6	Central	Mostly Urban	48.8	20476	219	54	85	97	243	7	1069.5	263.7	415.1	473.7	1186.8	34.2
2003	21	41	Douglas	6	Central	Mostly Rural	61.6	25020	37	102	106	117	339	14	147.9	407.7	423.7	467.6	1354.9	56
2003	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1141499	2545	301	1858	675	2850	16	223	26.4	162.8	59.1	249.7	1.4
2003	23	45	Edgar	5	Central	Mostly Rural	51.8	23258	46	30	203	59	300	8	197.8	129	872.8	253.7	1289.9	34.4
2003	24	47	Edwards	2	Southern	Completely Rural	100	8377	38	12	49	31	92	0	453.6	143.2	584.9	370.1	1098.2	0
2003	25	49	Effingham	4	Southern	Mostly Rural	59.7	43318	627	207	129	202	566	28	1447.4	477.9	297.8	466.3	1306.6	64.6
2003	26	51	Fayette	4	Southern	Mostly Rural	67	26256	258	108	92	294	498	4	982.6	411.3	350.4	1119.7	1896.7	15.2
2003	27	53	Ford	11	Central	Mostly Urban	41.8	17450	172	0	30	104	135	1	985.7	0	171.9	596	773.6	5.7
2003	28	55	Franklin	2	Southern	Mostly Urban	48.6	47594	47	20	156	110	296	10	98.8	42	327.8	231.1	621.9	21
2003	29	57	Fulton	9	Central	Mostly Rural	60	45352	88	22	138	53	216	3	194	48.5	304.3	116.9	476.3	6.6
2003	30	59	Gallatin	2	Southern	Completely Rural	100	7364	29	9	53	32	95	1	393.8	122.2	719.7	434.5	1290.1	13.6
2003	31	61	Greene	7	Central	Mostly Rural	70.8	17899	211	10	57	39	108	2	1178.8	55.9	318.5	217.9	603.4	11.2
2003	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	49792	57	5	124	36	168	3	114.5	10	249	72.3	337.4	6
2003	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10250	45	26	26	33	99	14	439	253.7	253.7	322	965.9	136.6
2003	34	67	Hancock	9	Central	Mostly Rural	71	23995	37	1	51	8	60	0	154.2	4.2	212.5	33.3	250.1	0
2003	35	69	Hardin	2	Southern	Completely Rural	100	5604	20	13	21	55	89	0	356.9	232	374.7	981.4	1588.2	0
2003	36	71	Henderson	9	Central	Mostly Rural	99.7	9587	43	1	18	4	23	0	448.5	10.4	187.8	41.7	239.9	0
2003	37	73	Henry	14	Central	Mostly Rural	50.3	62415	463	0	125	50	175	0	741.8	0	200.3	80.1	280.4	0
2003	38	75	Iroquois	21	Central	Mostly Rural	71.7	37719	124	0	146	174	321	1	328.7	0	387.1	461.3	851	2.7
2003	39	77	Jackson	1	Southern	Mostly Urban	37.2	69480	747	239	368	272	918	39	1075.1	344	529.6	391.5	1321.2	56.1
2003	40	79	Jasper	4	Southern	Mostly Rural	69.9	12244	59	18	63	41	122	0	481.9	147	514.5	334.9	996.4	0
2003	41	81	Jefferson	2	Southern	Mostly Rural	58.8	48567	165	30	203	75	311	3	339.7	61.8	418	154.4	640.4	6.2
2003	42	83	Jersey	7	Southern	Mostly Rural	60.6	27176	81	25	65	41	137	6	298.1	92	239.2	150.9	504.1	22.1
2003	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27457	200	67	77	44	194	6	728.4	244	280.4	160.3	706.6	21.9
2003	44	87	Johnson	1	Southern	Completely Rural	100	15285	91	7	40	15	63	1	595.4	45.8	261.7	98.1	412.2	6.5
2003	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	583032	2508	175	1766	446	2399	12	430.2	30	302.9	76.5	411.5	2.1
2003	46	91	Kankakee	21	Central	Mostly Urban	24.5	132381	93	0	560	147	710	3	70.3	0	423	111	536.3	2.3
2003	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	87206	488	57	206	229	512	20	559.6	65.4	236.2	262.6	587.1	22.9
2003	48	95	Knox	9	Central	Mostly Urban	24.3	65540	78	18	133	27	180	2	119	27.5	202.9	41.2	274.6	3.1
2003	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	853927	454	112	1647	1159	2924	6	53.2	13.1	192.9	135.7	342.4	0.7
2003	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	136760	271	21	474	157	659	7	198.2	15.4	346.6	114.8	481.9	5.1
2003	51	101	Lawrence	2	Southern	Mostly Rural	58	19722	169	3	130	102	235	0	856.9	15.2	659.2	517.2	1191.6	0
2003	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43482	594	40	161	111	338	26	1366.1	92	370.3	255.3	777.3	59.8
2003	53	105	Livingston	11	Central	Mostly Urban	40.8	48043	327	16	139	69	230	6	680.6	33.3	289.3	143.6	478.7	12.5
2003	54	107	Logan	11	Central	Mostly Urban	39.9	37110	439	31	201	122	360	6	1183	83.5	541.6	328.8	970.1	16.2
2003	55	109	McDonough	9	Central	Mostly Urban	29.5	38059	46	4	52	14	70	0	120.9	10.5	136.6	36.8	183.9	0
2003	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	360733	187	23	420	166	638	29	51.8	6.4	116.4	46	176.9	8
2003	57	113	McLean	11	Central	Mostly Urban	16.5	192071	393	77	777	219	1089	16	204.6	40.1	404.5	114	567	8.3
2003	58	115	Macon	6	Central	Mostly Urban	15.3	136648	381	33	610	147	790	0	278.8	24.1	446.4	107.6	578.1	0
2003	59	117	Macoupin	7	Central	Mostly Rural	58.5	59608	153	302	238	119	665	6	256.7	506.6	399.3	199.6	1115.6	10.1
2003	60	119	Madison	3	Southern	Mostly Urban	13.3	322371	578	7	1122	196	1327	2	179.3	2.2	348	60.8	411.6	0.6
2003	61	121	Marion	4	Southern	Mostly Urban	45.1	49983	210	115	290	188	634	41	420.1	230.1	580.2	376.1	1268.4	82
2003	62	123	Marshall	10	Central	Completely Rural	100	15733	205	10	35	42	106	19	1303	63.6	222.5	267	673.7	120.8
2003	63	125	Mason	8	Central	Mostly Rural	77.5	19282	70	44	78	71	197	4	363	228.2	404.5	368.2	1021.7	20.7
2003	64	127	Massac	1	Southern	Mostly Rural	50.5	18484	567	33	96	36	172	7	3067.5	178.5	519.4	194.8	930.5	37.9
2003	65	129	Menard	8	Central	Mostly Rural	75.7	15523	101	13	40	32	88	3	650.6	83.7	257.7	206.1	566.9	19.3
2003	66	131	Mercer	14	Central	Mostly Rural	77.8	20689	1	10	61	27	100	2	4.8	48.3	294.8	130.5	483.3	9.7
2003	67	133	Monroe	20	Southern	Mostly Urban	41.4	37024	165	4	75	3	82	0	445.7	10.8	202.6	8.1	221.5	0
2003	68	135	Montgomery	4	Central	Mostly Urban	41.6	36862	95	185	125	162	472	0	257.7	501.9	339.1	439.5	1280.5	0
2003	69	137	Morgan	7	Central	Mostly Urban	36.2	43732	118	163	180	124	484	17	269.8	372.7	411.6	283.5	1106.7	38.9
2003	70	139	Moultrie	6	Central	Mostly Rural	69.2	17854	97	59	70	75	214	10	543.3	330.5	392.1	420.1	1198.6	56
2003	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	65317	434	33	128	130	291	0	664.5	50.5	196	199	445.5	0
2003	72	143	Peoria	10	Central	Mostly Urban	14.6	224719	3393	2	894	218	1169	55	1509.9	0.9	397.8	97	520.2	24.5
2003	73	145	Perry	20	Southern	Mostly Urban	43.6	27169	269	1	64	31	97	1	990.1	3.7	235.6	114.1	357	3.7
2003	74	147	Piatt	6	Central	Mostly Rural	67.7	20102	75	57	26	88	177	6	373.1	283.6	129.3	437.8	880.5	29.8
2003	75	149	Pike	8	Central	Mostly Rural	72.3	20564	57	17	74	187	304	26	277.2	82.7	359.9	909.4	1478.3	126.4
2003	76	151	Pope	1	Southern	Completely Rural	100	5117	30	17	18	51	110	24	586.3	332.2	351.8	996.7	2149.7	469
2003	77	153	Pulaski	1	Southern	Completely Rural	100	8497	125	7	58	29	98	4	1471.1	82.4	682.6	341.3	1153.3	47.1
2003	78	155	Putnam	10	Central	Completely Rural	100	7413	48	7	27	32	71	5	647.5	94.4	364.2	431.7	957.8	67.4
2003	79	157	Randolph	20	Southern	Mostly Urban	42.6	40246	127	3	124	30	158	1	315.6	7.5	308.1	74.5	392.6	2.5
2003	80	159	Richland	2	Southern	Mostly Urban	43.5	19819	70	43	147	120	332	22	353.2	217	741.7	605.5	1675.2	111
2003	81	161	Rock Island	14	Central	Mostly Urban	10.9	179511	463	1048	931	179	2159	1	257.9	583.8	518.6	99.7	1202.7	0.6
2003	82	163	St. Clair	20	Southern	Mostly Urban	9.8	324241	849	63	1022	199	1291	7	261.8	19.4	315.2	61.4	398.2	2.2
2003	83	165	Saline	1	Southern	Mostly Urban	43.7	31507	112	25	156	161	349	7	355.5	79.3	495.1	511	1107.7	22.2
2003	84	167	Sangamon	7	Central	Mostly Urban	14.1	235406	1326	17	545	483	1047	2	563.3	7.2	231.5	205.2	444.8	0.8
2003	85	169	Schuyler	8	Central	Mostly Rural	57.6	8730	0	22	35	61	118	0	0	252	400.9	698.7	1351.7	0
2003	86	171	Scott	7	Central	Completely Rural	100	6771												
2003	87	173	Shelby	4	Central	Mostly Rural	77.7	27745	245	42	81	78	201	0	883	151.4	291.9	281.1	724.5	0
2003	88	175	Stark	10	Central	Completely Rural	100	7658	32	5	20	19	44	0	417.9	65.3	261.2	248.1	574.6	0
2003	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	59546	1205	26	394	245	673	8	2023.6	43.7	661.7	411.4	1130.2	13.4
2003	90	179	Tazewell	10	Central	Mostly Urban	20.4	157866	700	45	677	383	1182	77	443.4	28.5	428.8	242.6	748.7	48.8
2003	91	181	Union	1	Southern	Mostly Rural	65.9	21977	100	12	51	34	107	10	455	54.6	232.1	154.7	486.9	45.5
2003	92	183	Vermilion	5	Central	Mostly Urban	31.3	102203	292	125	767	175	1122	55	285.7	122.3	750.5	171.2	1097.8	53.8
2003	93	185	Wabash	2	Southern	Mostly Urban	38.9	15294	55	11	87	80	182	4	359.6	71.9	568.9	523.1	1190	26.2
2003	94	187	Warren	9	Central	Mostly Urban	45.5	22036	53	3	59	11	74	1	240.5	13.6	267.7	49.9	335.8	4.5
2003	95	189	Washington	20	Southern	Mostly Rural	73.6	18638	117	0	31	30	62	1	627.7	0	166.3	161	332.7	5.4
2003	96	191	Wayne	2	Southern	Mostly Rural	69.9	20606	2	11	94	62	170	3	9.7	53.4	456.2	300.9	825	14.6
2003	97	193	White	2	Southern	Mostly Rural	62	17952	71	59	142	147	381	33	395.5	328.7	791	818.9	2122.3	183.8
2003	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	73293	214	211	344	177	747	15	292	287.9	469.3	241.5	1019.2	20.5
2003	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	744385	306	45	1178	88	1311	0	41.1	6	158.3	11.8	176.1	0
2003	100	199	Williamson	1	Southern	Mostly Urban	34.8	75847	159	167	259	144	607	37	209.6	220.2	341.5	189.9	800.3	48.8
2003	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	352630	1059	1273	2075	891	4255	16	300.3	361	588.4	252.7	1206.6	4.5
2003	102	203	Woodford	11	Central	Mostly Rural	54.9	45023	654	41	129	127	342	45	1452.6	91.1	286.5	282.1	759.6	99.9
2004	1	1	Adams	8	Central	Mostly Urban	32.6	81890	114	70	346	157	576	3	139.2	85.5	422.5	191.7	703.4	3.7
2004	2	3	Alexander	1	Southern	Mostly Rural	61.9	11340	104	16	74	34	142	18	917.1	141.1	652.6	299.8	1252.2	158.7
2004	3	5	Bond	3	Southern	Mostly Rural	60.7	21731	105	42	85	100	242	15	483.2	193.3	391.1	460.2	1113.6	69
2004	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	61352	351	242	246	155	657	22	572.1	394.4	401	252.6	1070.9	35.9
2004	5	9	Brown	8	Central	Mostly Urban	41.1	8053	0	19	4	33	59	3	0	235.9	49.7	409.8	732.6	37.3
2004	6	11	Bureau	13	Central	Mostly Rural	57.4	42803	46	6	94	50	151	1	107.5	14	219.6	116.8	352.8	2.3
2004	7	13	Calhoun	8	Southern	Completely Rural	100	6197	35	11	18	67	100	4	564.8	177.5	290.5	1081.2	1613.7	64.5
2004	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	19515	257	11	53	38	104	2	1316.9	56.4	271.6	194.7	532.9	10.2
2004	9	17	Cass	8	Central	Mostly Rural	52.1	16821	91	50	100	36	188	2	541	297.2	594.5	214	1117.7	11.9
2004	10	19	Champaign	6	Central	Mostly Urban	12.7	224008	2786	47	832	314	1195	2	1243.7	21	371.4	140.2	533.5	0.9
2004	11	21	Christian	4	Central	Mostly Urban	43.5	43286	438	26	130	76	239	7	1011.9	60.1	300.3	175.6	552.1	16.2
2004	12	23	Clark	5	Southern	Mostly Rural	59.5	20590	102	19	86	22	128	1	495.4	92.3	417.7	106.8	621.7	4.9
2004	13	25	Clay	4	Southern	Mostly Rural	64.7	17299	56	33	83	63	188	9	323.7	190.8	479.8	364.2	1086.8	52
2004	14	27	Clinton	4	Southern	Mostly Urban	48.8	44741	544	49	82	152	292	9	1215.9	109.5	183.3	339.7	652.6	20.1
2004	15	29	Coles	5	Central	Mostly Urban	24.3	62695	513	59	300	158	532	15	818.2	94.1	478.5	252	848.6	23.9
2004	16	31	Cook	co	Northern - Cook	Completely Urban	0	6501635	8523	6685	23798	9782	41680	1415	131.1	102.8	366	150.5	641.1	21.8
2004	17	33	Crawford	2	Southern	Mostly Rural	60.2	24063	341	46	129	131	318	12	1417.1	191.2	536.1	544.4	1321.5	49.9
2004	18	35	Cumberland	5	Southern	Completely Rural	100	13599	18	13	16	25	54	0	132.4	95.6	117.7	183.8	397.1	0
2004	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	116504	260	31	338	102	474	3	223.2	26.6	290.1	87.6	406.9	2.6
2004	20	39	De Witt	6	Central	Mostly Urban	48.8	20460	241	62	73	92	239	12	1177.9	303	356.8	449.7	1168.1	58.7
2004	21	41	Douglas	6	Central	Mostly Rural	61.6	25111	58	105	110	110	349	24	231	418.1	438.1	438.1	1389.8	95.6
2004	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1140417	2	427	1956	727	3131	21	0.2	37.4	171.5	63.7	274.5	1.8
2004	23	45	Edgar	5	Central	Mostly Rural	51.8	23193	80	7	183	61	275	24	344.9	30.2	789	263	1185.7	103.5
2004	24	47	Edwards	2	Southern	Completely Rural	100	8297	25	5	37	18	64	4	301.3	60.3	445.9	216.9	771.4	48.2
2004	25	49	Effingham	4	Southern	Mostly Rural	59.7	43265	497	199	122	191	551	39	1148.7	460	282	441.5	1273.5	90.1
2004	26	51	Fayette	4	Southern	Mostly Rural	67	25787	288	129	92	252	477	4	1116.8	500.3	356.8	977.2	1849.8	15.5
2004	27	53	Ford	11	Central	Mostly Urban	41.8	17469	133	26	48	110	189	5	761.3	148.8	274.8	629.7	1081.9	28.6
2004	28	55	Franklin	2	Southern	Mostly Urban	48.6	47856	70	25	160	89	284	10	146.3	52.2	334.3	186	593.4	20.9
2004	29	57	Fulton	9	Central	Mostly Rural	60	45244	113	21	146	73	240	0	249.8	46.4	322.7	161.3	530.5	0
2004	30	59	Gallatin	2	Southern	Completely Rural	100	7300	27	12	51	33	96	0	369.9	164.4	698.6	452.1	1315.1	0
2004	31	61	Greene	7	Central	Mostly Rural	70.8	17670	246	6	54	32	93	1	1392.2	34	305.6	181.1	526.3	5.7
2004	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	51931	53	7	144	39	191	1	102.1	13.5	277.3	75.1	367.8	1.9
2004	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10385	34	17	36	48	117	16	327.4	163.7	346.7	462.2	1126.6	154.1
2004	34	67	Hancock	9	Central	Mostly Rural	71	23837	18	3	62	6	71	0	75.5	12.6	260.1	25.2	297.9	0
2004	35	69	Hardin	2	Southern	Completely Rural	100	5518	22	17	25	51	93	0	398.7	308.1	453.1	924.2	1685.4	0
2004	36	71	Henderson	9	Central	Mostly Rural	99.7	9538	37	1	20	6	27	0	387.9	10.5	209.7	62.9	283.1	0
2004	37	73	Henry	14	Central	Mostly Rural	50.3	62010	372	0	130	42	173	1	599.9	0	209.6	67.7	279	1.6
2004	38	75	Iroquois	21	Central	Mostly Rural	71.7	37420	173	0	168	107	276	1	462.3	0	449	285.9	737.6	2.7
2004	39	77	Jackson	1	Southern	Mostly Urban	37.2	69661	457	422	380	162	1037	73	656	605.8	545.5	232.6	1488.6	104.8
2004	40	79	Jasper	4	Southern	Mostly Rural	69.9	12290	54	17	52	47	116	0	439.4	138.3	423.1	382.4	943.9	0
2004	41	81	Jefferson	2	Southern	Mostly Rural	58.8	48299	147	22	175	57	258	4	304.4	45.5	362.3	118	534.2	8.3
2004	42	83	Jersey	7	Southern	Mostly Rural	60.6	27439	76	30	58	41	133	4	277	109.3	211.4	149.4	484.7	14.6
2004	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27338	209	63	76	60	204	5	764.5	230.4	278	219.5	746.2	18.3
2004	44	87	Johnson	1	Southern	Completely Rural	100	15221	78	4	40	23	74	7	512.4	26.3	262.8	151.1	486.2	46
2004	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	599292	823	104	1147	299	1550	0	137.3	17.4	191.4	49.9	258.6	0
2004	46	91	Kankakee	21	Central	Mostly Urban	24.5	133446	121	0	515	130	648	3	90.7	0	385.9	97.4	485.6	2.2
2004	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	95065	546	47	251	230	541	13	574.3	49.4	264	241.9	569.1	13.7
2004	48	95	Knox	9	Central	Mostly Urban	24.3	64864	70	11	141	24	176	0	107.9	17	217.4	37	271.3	0
2004	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	863493	435	155	1599	1250	3023	19	50.4	18	185.2	144.8	350.1	2.2
2004	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	137828	226	12	523	141	688	12	164	8.7	379.5	102.3	499.2	8.7
2004	51	101	Lawrence	2	Southern	Mostly Rural	58	19806	156	0	131	107	238	0	787.6	0	661.4	540.2	1201.7	0
2004	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43478	1	96	348	214	714	56	2.3	220.8	800.4	492.2	1642.2	128.8
2004	53	105	Livingston	11	Central	Mostly Urban	40.8	47992	324	21	173	62	259	3	675.1	43.8	360.5	129.2	539.7	6.3
2004	54	107	Logan	11	Central	Mostly Urban	39.9	37063	166	121	218	399	775	37	447.9	326.5	588.2	1076.5	2091	99.8
2004	55	109	McDonough	9	Central	Mostly Urban	29.5	37809	34	6	58	8	72	0	89.9	15.9	153.4	21.2	190.4	0
2004	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	367976	204	31	415	194	675	35	55.4	8.4	112.8	52.7	183.4	9.5
2004	57	113	McLean	11	Central	Mostly Urban	16.5	193702	319	55	790	156	1045	44	164.7	28.4	407.8	80.5	539.5	22.7
2004	58	115	Macon	6	Central	Mostly Urban	15.3	135914	322	12	600	99	711	0	236.9	8.8	441.5	72.8	523.1	0
2004	59	117	Macoupin	7	Central	Mostly Rural	58.5	59384	135	271	215	104	596	6	227.3	456.4	362.1	175.1	1003.6	10.1
2004	60	119	Madison	3	Southern	Mostly Urban	13.3	323120	562	8	1174	202	1385	1	173.9	2.5	363.3	62.5	428.6	0.3
2004	61	121	Marion	4	Southern	Mostly Urban	45.1	49379	168	137	339	230	756	50	340.2	277.4	686.5	465.8	1531	101.3
2004	62	123	Marshall	10	Central	Completely Rural	100	15852	211	8	38	34	87	7	1331.1	50.5	239.7	214.5	548.8	44.2
2004	63	125	Mason	8	Central	Mostly Rural	77.5	19266	81	30	54	46	135	5	420.4	155.7	280.3	238.8	700.7	26
2004	64	127	Massac	1	Southern	Mostly Rural	50.5	18813	463	22	85	47	161	7	2461.1	116.9	451.8	249.8	855.8	37.2
2004	65	129	Menard	8	Central	Mostly Rural	75.7	15593	130	12	37	34	84	1	833.7	77	237.3	218	538.7	6.4
2004	66	131	Mercer	14	Central	Mostly Rural	77.8	20570	166	6	53	26	87	2	807	29.2	257.7	126.4	422.9	9.7
2004	67	133	Monroe	20	Southern	Mostly Urban	41.4	37794	190	2	84	4	90	0	502.7	5.3	222.3	10.6	238.1	0
2004	68	135	Montgomery	4	Central	Mostly Urban	41.6	36803	189	201	126	187	514	0	513.5	546.2	342.4	508.1	1396.6	0
2004	69	137	Morgan	7	Central	Mostly Urban	36.2	43824	121	112	181	147	458	18	276.1	255.6	413	335.4	1045.1	41.1
2004	70	139	Moultrie	6	Central	Mostly Rural	69.2	17955	73	59	51	84	204	10	406.6	328.6	284	467.8	1136.2	55.7
2004	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	65569	450	37	123	128	290	2	686.3	56.4	187.6	195.2	442.3	3.1
2004	72	143	Peoria	10	Central	Mostly Urban	14.6	224941	3120	0	943	177	1166	46	1387	0	419.2	78.7	518.4	20.4
2004	73	145	Perry	20	Southern	Mostly Urban	43.6	27139	265	1	62	28	91	0	976.5	3.7	228.5	103.2	335.3	0
2004	74	147	Piatt	6	Central	Mostly Rural	67.7	20196	61	66	30	60	161	5	302	326.8	148.5	297.1	797.2	24.8
2004	75	149	Pike	8	Central	Mostly Rural	72.3	20609	60	17	74	210	329	28	291.1	82.5	359.1	1019	1596.4	135.9
2004	76	151	Pope	1	Southern	Completely Rural	100	5161	17	15	19	29	77	14	329.4	290.6	368.1	561.9	1492	271.3
2004	77	153	Pulaski	1	Southern	Completely Rural	100	8315	125	8	47	29	88	4	1503.3	96.2	565.2	348.8	1058.3	48.1
2004	78	155	Putnam	10	Central	Completely Rural	100	7283	52	16	30	26	81	9	714	219.7	411.9	357	1112.2	123.6
2004	79	157	Randolph	20	Southern	Mostly Urban	42.6	40499	150	1	93	21	118	3	370.4	2.5	229.6	51.9	291.4	7.4
2004	80	159	Richland	2	Southern	Mostly Urban	43.5	19775	59	42	138	119	320	21	298.4	212.4	697.9	601.8	1618.2	106.2
2004	81	161	Rock Island	14	Central	Mostly Urban	10.9	179070	412	971	853	182	2010	4	230.1	542.2	476.4	101.6	1122.5	2.2
2004	82	163	St. Clair	20	Southern	Mostly Urban	9.8	325852	1192	46	947	164	1157	0	365.8	14.1	290.6	50.3	355.1	0
2004	83	165	Saline	1	Southern	Mostly Urban	43.7	31435	110	72	153	149	378	4	349.9	229	486.7	474	1202.5	12.7
2004	84	167	Sangamon	7	Central	Mostly Urban	14.1	235883	1315	26	637	525	1190	1	557.5	11	270	222.6	504.5	0.4
2004	85	169	Schuyler	8	Central	Mostly Rural	57.6	8924	1	27	37	68	134	2	11.2	302.6	414.6	762	1501.6	22.4
2004	86	171	Scott	7	Central	Completely Rural	100	6707												
2004	87	173	Shelby	4	Central	Mostly Rural	77.7	27510	241	60	87	71	218	0	876	218.1	316.2	258.1	792.4	0
2004	88	175	Stark	10	Central	Completely Rural	100	7605	40	2	19	11	33	1	526	26.3	249.8	144.6	433.9	13.1
2004	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	59356	1267	54	386	275	726	11	2134.6	91	650.3	463.3	1223.1	18.5
2004	90	179	Tazewell	10	Central	Mostly Urban	20.4	158958	1062	15	552	361	969	41	668.1	9.4	347.3	227.1	609.6	25.8
2004	91	181	Union	1	Southern	Mostly Rural	65.9	21899	112	21	74	31	132	6	511.4	95.9	337.9	141.6	602.8	27.4
2004	92	183	Vermilion	5	Central	Mostly Urban	31.3	102155	411	134	593	224	1251	300	402.3	131.2	580.5	219.3	1224.6	293.7
2004	93	185	Wabash	2	Southern	Mostly Urban	38.9	15228	48	7	87	53	147	0	315.2	46	571.3	348	965.3	0
2004	94	187	Warren	9	Central	Mostly Urban	45.5	21575	36	1	46	19	66	0	166.9	4.6	213.2	88.1	305.9	0
2004	95	189	Washington	20	Southern	Mostly Rural	73.6	18511	170	0	38	22	61	1	918.4	0	205.3	118.8	329.5	5.4
2004	96	191	Wayne	2	Southern	Mostly Rural	69.9	20546	89	12	107	71	193	3	433.2	58.4	520.8	345.6	939.4	14.6
2004	97	193	White	2	Southern	Mostly Rural	62	18070	54	50	138	145	352	19	298.8	276.7	763.7	802.4	1948	105.1
2004	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	73134	169	151	339	164	665	11	231.1	206.5	463.5	224.2	909.3	15
2004	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	777632	282	86	1182	96	1366	2	36.3	11.1	152	12.3	175.7	0.3
2004	100	199	Williamson	1	Southern	Mostly Urban	34.8	76938	161	259	281	150	734	44	209.3	336.6	365.2	195	954	57.2
2004	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	353522	1301	1250	2226	1011	4503	16	368	353.6	629.7	286	1273.8	4.5
2004	102	203	Woodford	11	Central	Mostly Rural	54.9	45596	721	46	147	129	372	50	1581.3	100.9	322.4	282.9	815.9	109.7
2005	1	1	Adams	8	Central	Mostly Urban	32.6	81936	107	65	354	150	573	4	130.6	79.3	432	183.1	699.3	4.9
2005	2	3	Alexander	1	Southern	Mostly Rural	61.9	10919	125	12	97	30	157	18	1144.8	109.9	888.4	274.8	1437.9	164.9
2005	3	5	Bond	3	Southern	Mostly Rural	60.7	21562	124	62	76	119	271	14	575.1	287.5	352.5	551.9	1256.8	64.9
2005	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	63732	381	154	297	202	664	11	597.8	241.6	466	317	1041.9	17.3
2005	5	9	Brown	8	Central	Mostly Urban	41.1	7973	0	30	10	44	84	0	0	376.3	125.4	551.9	1053.6	0
2005	6	11	Bureau	13	Central	Mostly Rural	57.4	42799	34	5	102	43	150	0	79.4	11.7	238.3	100.5	350.5	0
2005	7	13	Calhoun	8	Southern	Completely Rural	100	6231	35	14	28	50	97	5	561.7	224.7	449.4	802.4	1556.7	80.2
2005	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	19167	222	13	52	44	110	1	1158.2	67.8	271.3	229.6	573.9	5.2
2005	9	17	Cass	8	Central	Mostly Rural	52.1	16894	82	31	93	25	150	1	485.4	183.5	550.5	148	887.9	5.9
2005	10	19	Champaign	6	Central	Mostly Urban	12.7	226214	2375	70	816	356	1243	1	1049.9	30.9	360.7	157.4	549.5	0.4
2005	11	21	Christian	4	Central	Mostly Urban	43.5	43021	382	36	159	85	289	9	887.9	83.7	369.6	197.6	671.8	20.9
2005	12	23	Clark	5	Southern	Mostly Rural	59.5	20572	79	18	95	21	134	0	384	87.5	461.8	102.1	651.4	0
2005	13	25	Clay	4	Southern	Mostly Rural	64.7	17299	64	38	94	65	212	15	370	219.7	543.4	375.7	1225.5	86.7
2005	14	27	Clinton	4	Southern	Mostly Urban	48.8	44792	479	37	119	126	301	19	1069.4	82.6	265.7	281.3	672	42.4
2005	15	29	Coles	5	Central	Mostly Urban	24.3	62362	438	36	315	141	509	17	702.4	57.7	505.1	226.1	816.2	27.3
2005	16	31	Cook	co	Northern - Cook	Completely Urban	0	6433055	7665	7185	20743	9909	39293	1449	119.2	111.7	322.4	154	610.8	22.5
2005	17	33	Crawford	2	Southern	Mostly Rural	60.2	24042	257	42	142	131	322	7	1069	174.7	590.6	544.9	1339.3	29.1
2005	18	35	Cumberland	5	Southern	Completely Rural	100	13552	12	9	14	18	44	3	88.5	66.4	103.3	132.8	324.7	22.1
2005	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	119441	255	24	316	99	443	4	213.5	20.1	264.6	82.9	370.9	3.3
2005	20	39	De Witt	6	Central	Mostly Urban	48.8	20477	247	71	65	97	240	7	1206.2	346.7	317.4	473.7	1172	34.2
2005	21	41	Douglas	6	Central	Mostly Rural	61.6	25084	40	98	102	121	339	18	159.5	390.7	406.6	482.4	1351.5	71.8
2005	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1135209	2000	514	2047	729	3308	18	176.2	45.3	180.3	64.2	291.4	1.6
2005	23	45	Edgar	5	Central	Mostly Rural	51.8	23095	80	3	161	52	228	12	346.4	13	697.1	225.2	987.2	52
2005	24	47	Edwards	2	Southern	Completely Rural	100	8292	21	16	27	23	68	2	253.3	193	325.6	277.4	820.1	24.1
2005	25	49	Effingham	4	Southern	Mostly Rural	59.7	42984	420	150	127	202	493	14	977.1	349	295.5	469.9	1146.9	32.6
2005	26	51	Fayette	4	Southern	Mostly Rural	67	26583	296	159	111	198	472	4	1113.5	598.1	417.6	744.8	1775.6	15
2005	27	53	Ford	11	Central	Mostly Urban	41.8	17349	198	19	46	93	160	2	1141.3	109.5	265.1	536.1	922.2	11.5
2005	28	55	Franklin	2	Southern	Mostly Urban	48.6	48270	81	31	168	112	319	8	167.8	64.2	348	232	660.9	16.6
2005	29	57	Fulton	9	Central	Mostly Rural	60	44963	139	20	149	68	238	1	309.1	44.5	331.4	151.2	529.3	2.2
2005	30	59	Gallatin	2	Southern	Completely Rural	100	7258	27	12	53	34	99	0	372	165.3	730.2	468.4	1364	0
2005	31	61	Greene	7	Central	Mostly Rural	70.8	17638	148	18	53	55	148	22	839.1	102.1	300.5	311.8	839.1	124.7
2005	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	55540	67	6	165	54	226	1	120.6	10.8	297.1	97.2	406.9	1.8
2005	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10306	33	17	24	37	89	11	320.2	165	232.9	359	863.6	106.7
2005	34	67	Hancock	9	Central	Mostly Rural	71	23632	25	1	48	2	51	0	105.8	4.2	203.1	8.5	215.8	0
2005	35	69	Hardin	2	Southern	Completely Rural	100	5481	28	18	23	58	99	0	510.9	328.4	419.6	1058.2	1806.2	0
2005	36	71	Henderson	9	Central	Mostly Rural	99.7	9327	39	1	21	4	26	0	418.1	10.7	225.2	42.9	278.8	0
2005	37	73	Henry	14	Central	Mostly Rural	50.3	62054	717	10	147	26	183	0	1155.4	16.1	236.9	41.9	294.9	0
2005	38	75	Iroquois	21	Central	Mostly Rural	71.7	37471	164	0	159	69	228	0	437.7	0	424.3	184.1	608.5	0
2005	39	77	Jackson	1	Southern	Mostly Urban	37.2	70071	255	486	362	145	1065	72	363.9	693.6	516.6	206.9	1519.9	102.8
2005	40	79	Jasper	4	Southern	Mostly Rural	69.9	12115	56	12	57	38	107	0	462.2	99.1	470.5	313.7	883.2	0
2005	41	81	Jefferson	2	Southern	Mostly Rural	58.8	48220	120	14	176	70	265	5	248.9	29	365	145.2	549.6	10.4
2005	42	83	Jersey	7	Southern	Mostly Rural	60.6	27545	84	24	89	38	154	3	305	87.1	323.1	138	559.1	10.9
2005	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27332	216	69	102	53	241	17	790.3	252.5	373.2	193.9	881.8	62.2
2005	44	87	Johnson	1	Southern	Completely Rural	100	15114	70	10	37	28	78	3	463.1	66.2	244.8	185.3	516.1	19.8
2005	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	609688	7	649	1143	497	2367	78	1.1	106.4	187.5	81.5	388.2	12.8
2005	46	91	Kankakee	21	Central	Mostly Urban	24.5	134616	109	1	479	153	635	2	81	0.7	355.8	113.7	471.7	1.5
2005	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	104761	366	38	232	222	501	9	349.4	36.3	221.5	211.9	478.2	8.6
2005	48	95	Knox	9	Central	Mostly Urban	24.3	64317	73	14	172	26	213	1	113.5	21.8	267.4	40.4	331.2	1.6
2005	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	870183	498	564	1823	995	3594	212	57.2	64.8	209.5	114.3	413	24.4
2005	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	138055	177	12	495	103	617	7	128.2	8.7	358.6	74.6	446.9	5.1
2005	51	101	Lawrence	2	Southern	Mostly Rural	58	20146	184	2	160	86	248	0	913.3	9.9	794.2	426.9	1231	0
2005	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43266	525	51	225	146	447	25	1213.4	117.9	520	337.4	1033.1	57.8
2005	53	105	Livingston	11	Central	Mostly Urban	40.8	47846	346	47	170	68	290	5	723.2	98.2	355.3	142.1	606.1	10.5
2005	54	107	Logan	11	Central	Mostly Urban	39.9	36858	161	163	217	421	852	51	436.8	442.2	588.7	1142.2	2311.6	138.4
2005	55	109	McDonough	9	Central	Mostly Urban	29.5	37789	38	1	54	14	70	1	100.6	2.6	142.9	37	185.2	2.6
2005	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	375043	233	28	376	153	602	45	62.1	7.5	100.3	40.8	160.5	12
2005	57	113	McLean	11	Central	Mostly Urban	16.5	195178	257	39	741	112	937	45	131.7	20	379.7	57.4	480.1	23.1
2005	58	115	Macon	6	Central	Mostly Urban	15.3	135546	315	6	612	105	723	0	232.4	4.4	451.5	77.5	533.4	0
2005	59	117	Macoupin	7	Central	Mostly Rural	58.5	59139	117	210	215	70	498	3	197.8	355.1	363.6	118.4	842.1	5.1
2005	60	119	Madison	3	Southern	Mostly Urban	13.3	323924	720	185	1373	266	1824	0	222.3	57.1	423.9	82.1	563.1	0
2005	61	121	Marion	4	Southern	Mostly Urban	45.1	48924	197	155	309	172	673	37	402.7	316.8	631.6	351.6	1375.6	75.6
2005	62	123	Marshall	10	Central	Completely Rural	100	15816	0	16	38	64	135	17	0	101.2	240.3	404.7	853.6	107.5
2005	63	125	Mason	8	Central	Mostly Rural	77.5	18953	71	33	56	78	170	3	374.6	174.1	295.5	411.5	897	15.8
2005	64	127	Massac	1	Southern	Mostly Rural	50.5	18871	384	29	83	76	215	27	2034.9	153.7	439.8	402.7	1139.3	143.1
2005	65	129	Menard	8	Central	Mostly Rural	75.7	15428	94	13	24	30	68	1	609.3	84.3	155.6	194.5	440.8	6.5
2005	66	131	Mercer	14	Central	Mostly Rural	77.8	20384	199	10	54	38	104	2	976.3	49.1	264.9	186.4	510.2	9.8
2005	67	133	Monroe	20	Southern	Mostly Urban	41.4	38471	191	4	70	2	76	0	496.5	10.4	182	5.2	197.6	0
2005	68	135	Montgomery	4	Central	Mostly Urban	41.6	36576	299	222	133	254	609	0	817.5	607	363.6	694.4	1665	0
2005	69	137	Morgan	7	Central	Mostly Urban	36.2	43501	175	70	159	209	442	4	402.3	160.9	365.5	480.4	1016.1	9.2
2005	70	139	Moultrie	6	Central	Mostly Rural	69.2	18043	49	62	44	72	182	4	271.6	343.6	243.9	399	1008.7	22.2
2005	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	65957	472	28	160	130	319	1	715.6	42.5	242.6	197.1	483.6	1.5
2005	72	143	Peoria	10	Central	Mostly Urban	14.6	225087	3168	0	956	188	1187	43	1407.5	0	424.7	83.5	527.4	19.1
2005	73	145	Perry	20	Southern	Mostly Urban	43.6	27182	266	2	70	36	109	1	978.6	7.4	257.5	132.4	401	3.7
2005	74	147	Piatt	6	Central	Mostly Rural	67.7	20480	41	52	43	68	165	2	200.2	253.9	210	332	805.7	9.8
2005	75	149	Pike	8	Central	Mostly Rural	72.3	20548	70	13	74	245	360	28	340.7	63.3	360.1	1192.3	1752	136.3
2005	76	151	Pope	1	Southern	Completely Rural	100	5058	21	6	24	35	78	13	415.2	118.6	474.5	692	1542.1	257
2005	77	153	Pulaski	1	Southern	Completely Rural	100	8120	163	12	49	23	88	4	2007.4	147.8	603.4	283.3	1083.7	49.3
2005	78	155	Putnam	10	Central	Completely Rural	100	7220	47	18	39	30	97	10	651	249.3	540.2	415.5	1343.5	138.5
2005	79	157	Randolph	20	Southern	Mostly Urban	42.6	40281	150	1	133	22	156	0	372.4	2.5	330.2	54.6	387.3	0
2005	80	159	Richland	2	Southern	Mostly Urban	43.5	19727	63	47	133	106	304	18	319.4	238.3	674.2	537.3	1541	91.2
2005	81	161	Rock Island	14	Central	Mostly Urban	10.9	178676	396	1189	809	215	2217	4	221.6	665.5	452.8	120.3	1240.8	2.2
2005	82	163	St. Clair	20	Southern	Mostly Urban	9.8	326198	1008	55	1183	209	1451	4	309	16.9	362.7	64.1	444.8	1.2
2005	83	165	Saline	1	Southern	Mostly Urban	43.7	31097	76	104	156	124	386	2	244.4	334.4	501.7	398.8	1241.3	6.4
2005	84	167	Sangamon	7	Central	Mostly Urban	14.1	236462	1384	26	690	430	1146	0	585.3	11	291.8	181.8	484.6	0
2005	85	169	Schuyler	8	Central	Mostly Rural	57.6	9059	4	34	51	76	161	0	44.2	375.3	563	838.9	1777.2	0
2005	86	171	Scott	7	Central	Completely Rural	100	6691												
2005	87	173	Shelby	4	Central	Mostly Rural	77.7	27481	272	75	90	104	269	0	989.8	272.9	327.5	378.4	978.9	0
2005	88	175	Stark	10	Central	Completely Rural	100	7555	47	1	25	24	53	3	622.1	13.2	330.9	317.7	701.5	39.7
2005	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	58786	1385	56	372	283	719	8	2356	95.3	632.8	481.4	1223.1	13.6
2005	90	179	Tazewell	10	Central	Mostly Urban	20.4	160250	1426	5	500	391	931	35	889.9	3.1	312	244	581	21.8
2005	91	181	Union	1	Southern	Mostly Rural	65.9	21919	120	23	87	27	141	4	547.5	104.9	396.9	123.2	643.3	18.2
2005	92	183	Vermilion	5	Central	Mostly Urban	31.3	101850	615	145	852	224	1267	46	603.8	142.4	836.5	219.9	1244	45.2
2005	93	185	Wabash	2	Southern	Mostly Urban	38.9	15182	52	1	106	53	161	1	342.5	6.6	698.2	349.1	1060.5	6.6
2005	94	187	Warren	9	Central	Mostly Urban	45.5	21507	33	0	39	20	60	1	153.4	0	181.3	93	279	4.6
2005	95	189	Washington	20	Southern	Mostly Rural	73.6	18266	159	1	26	25	52	0	870.5	5.5	142.3	136.9	284.7	0
2005	96	191	Wayne	2	Southern	Mostly Rural	69.9	20591	100	10	111	60	194	13	485.6	48.6	539.1	291.4	942.2	63.1
2005	97	193	White	2	Southern	Mostly Rural	62	18050	64	48	117	141	306	0	354.6	265.9	648.2	781.2	1695.3	0
2005	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	72690	210	190	326	185	711	10	288.9	261.4	448.5	254.5	978.1	13.8
2005	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	805373	321	111	1241	113	1465	0	39.9	13.8	154.1	14	181.9	0
2005	100	199	Williamson	1	Southern	Mostly Urban	34.8	77486	157	281	283	208	821	49	202.6	362.6	365.2	268.4	1059.5	63.2
2005	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	355353	1510	1266	1775	1315	4365	14	424.9	356.3	499.5	370.1	1228.4	3.9
2005	102	203	Woodford	11	Central	Mostly Rural	54.9	46232	807	52	136	127	385	70	1745.5	112.5	294.2	274.7	832.8	151.4
2006	1	1	Adams	8	Central	Mostly Urban	32.6	81968	1114	77	403	138	624	6	1359.1	93.9	491.7	168.4	761.3	7.3
2006	2	3	Alexander	1	Southern	Mostly Rural	61.9	10679	149	16	95	46	178	21	1395.3	149.8	889.6	430.8	1666.8	196.6
2006	3	5	Bond	3	Southern	Mostly Rural	60.7	21576	152	32	91	87	226	16	704.5	148.3	421.8	403.2	1047.5	74.2
2006	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	66451	275	218	308	243	801	32	413.8	328.1	463.5	365.7	1205.4	48.2
2006	5	9	Brown	8	Central	Mostly Urban	41.1	7931	1	27	13	36	76	0	12.6	340.4	163.9	453.9	958.3	0
2006	6	11	Bureau	13	Central	Mostly Rural	57.4	43018	51	7	84	48	140	1	118.6	16.3	195.3	111.6	325.4	2.3
2006	7	13	Calhoun	8	Southern	Completely Rural	100	6221	13	10	34	61	111	6	209	160.7	546.5	980.5	1784.3	96.4
2006	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	19054	186	16	41	35	93	1	976.2	84	215.2	183.7	488.1	5.2
2006	9	17	Cass	8	Central	Mostly Rural	52.1	16794	77	58	105	25	190	2	458.5	345.4	625.2	148.9	1131.4	11.9
2006	10	19	Champaign	6	Central	Mostly Urban	12.7	229599	2621	123	899	347	1374	5	1141.6	53.6	391.6	151.1	598.4	2.2
2006	11	21	Christian	4	Central	Mostly Urban	43.5	42792	430	34	161	105	309	9	1004.9	79.5	376.2	245.4	722.1	21
2006	12	23	Clark	5	Southern	Mostly Rural	59.5	20418	93	11	109	26	147	1	455.5	53.9	533.8	127.3	720	4.9
2006	13	25	Clay	4	Southern	Mostly Rural	64.7	17213	55	61	104	86	256	5	319.5	354.4	604.2	499.6	1487.2	29
2006	14	27	Clinton	4	Southern	Mostly Urban	48.8	45210	397	35	110	109	262	8	878.1	77.4	243.3	241.1	579.5	17.7
2006	15	29	Coles	5	Central	Mostly Urban	24.3	62690	435	39	399	132	597	27	693.9	62.2	636.5	210.6	952.3	43.1
2006	16	31	Cook	co	Northern - Cook	Completely Urban	0	6364728	8140	9210	20112	10142	41204	1740	127.9	144.7	316	159.3	647.4	27.3
2006	17	33	Crawford	2	Southern	Mostly Rural	60.2	23931	232	45	125	130	306	6	969.5	188	522.3	543.2	1278.7	25.1
2006	18	35	Cumberland	5	Southern	Completely Rural	100	13629	9	7	19	20	49	3	66	51.4	139.4	146.7	359.5	22
2006	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	123010	245	16	321	112	455	6	199.2	13	261	91	369.9	4.9
2006	20	39	De Witt	6	Central	Mostly Urban	48.8	20577	285	55	72	90	219	2	1385	267.3	349.9	437.4	1064.3	9.7
2006	21	41	Douglas	6	Central	Mostly Rural	61.6	25100	78	93	86	63	261	19	310.8	370.5	342.6	251	1039.8	75.7
2006	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1129395	1901	685	2031	802	3542	24	168.3	60.7	179.8	71	313.6	2.1
2006	23	45	Edgar	5	Central	Mostly Rural	51.8	23069	67	8	165	66	241	2	290.4	34.7	715.2	286.1	1044.7	8.7
2006	24	47	Edwards	2	Southern	Completely Rural	100	8146	18	9	27	17	55	2	221	110.5	331.5	208.7	675.2	24.6
2006	25	49	Effingham	4	Southern	Mostly Rural	59.7	42789	546	67	140	180	396	9	1276	156.6	327.2	420.7	925.5	21
2006	26	51	Fayette	4	Southern	Mostly Rural	67	26605	332	184	122	185	495	4	1247.9	691.6	458.6	695.4	1860.6	15
2006	27	53	Ford	11	Central	Mostly Urban	41.8	17377	188	39	46	107	195	3	1081.9	224.4	264.7	615.8	1122.2	17.3
2006	28	55	Franklin	2	Southern	Mostly Urban	48.6	48187	110	23	181	148	356	4	228.3	47.7	375.6	307.1	738.8	8.3
2006	29	57	Fulton	9	Central	Mostly Rural	60	44904	113	20	176	65	265	4	251.6	44.5	391.9	144.8	590.1	8.9
2006	30	59	Gallatin	2	Southern	Completely Rural	100	7218	25	6	49	30	85	0	346.4	83.1	678.9	415.6	1177.6	0
2006	31	61	Greene	7	Central	Mostly Rural	70.8	17294	176	8	67	103	184	6	1017.7	46.3	387.4	595.6	1064	34.7
2006	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	58488	104	7	142	29	179	1	177.8	12	242.8	49.6	306	1.7
2006	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10346	38	18	17	45	90	10	367.3	174	164.3	435	869.9	96.7
2006	34	67	Hancock	9	Central	Mostly Rural	71	23532	34	1	50	9	60	0	144.5	4.2	212.5	38.2	255	0
2006	35	69	Hardin	2	Southern	Completely Rural	100	5360	38	9	22	58	89	0	709	167.9	410.4	1082.1	1660.4	0
2006	36	71	Henderson	9	Central	Mostly Rural	99.7	9073	24	1	22	7	30	0	264.5	11	242.5	77.2	330.7	0
2006	37	73	Henry	14	Central	Mostly Rural	50.3	61826	668	16	147	44	207	0	1080.5	25.9	237.8	71.2	334.8	0
2006	38	75	Iroquois	21	Central	Mostly Rural	71.7	37111	174	0	177	64	241	0	468.9	0	476.9	172.5	649.4	0
2006	39	77	Jackson	1	Southern	Mostly Urban	37.2	70209	251	416	317	103	901	65	357.5	592.5	451.5	146.7	1283.3	92.6
2006	40	79	Jasper	4	Southern	Mostly Rural	69.9	11980	50	13	61	36	110	0	417.4	108.5	509.2	300.5	918.2	0
2006	41	81	Jefferson	2	Southern	Mostly Rural	58.8	48060	98	10	156	66	234	2	203.9	20.8	324.6	137.3	486.9	4.2
2006	42	83	Jersey	7	Southern	Mostly Rural	60.6	27767	62	20	69	46	139	4	223.3	72	248.5	165.7	500.6	14.4
2006	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27433	164	61	73	32	179	13	597.8	222.4	266.1	116.6	652.5	47.4
2006	44	87	Johnson	1	Southern	Completely Rural	100	15239	67	14	34	31	80	1	439.7	91.9	223.1	203.4	525	6.6
2006	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	621592	1570	126	1505	382	2024	11	252.6	20.3	242.1	61.5	325.6	1.8
2006	46	91	Kankakee	21	Central	Mostly Urban	24.5	136722	113	0	485	139	624	0	82.6	0	354.7	101.7	456.4	0
2006	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	117548	299	38	228	195	471	10	254.4	32.3	194	165.9	400.7	8.5
2006	48	95	Knox	9	Central	Mostly Urban	24.3	63821	96	25	196	38	264	5	150.4	39.2	307.1	59.5	413.7	7.8
2006	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	875067	494	535	1973	872	3689	309	56.5	61.1	225.5	99.6	421.6	35.3
2006	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	138643	195	12	499	88	609	10	140.6	8.7	359.9	63.5	439.3	7.2
2006	51	101	Lawrence	2	Southern	Mostly Rural	58	19940	200	4	167	90	261	0	1003	20.1	837.5	451.4	1308.9	0
2006	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43417	593	33	197	119	369	20	1365.8	76	453.7	274.1	849.9	46.1
2006	53	105	Livingston	11	Central	Mostly Urban	40.8	47547	354	53	158	73	291	7	744.5	111.5	332.3	153.5	612	14.7
2006	54	107	Logan	11	Central	Mostly Urban	39.9	36485	593	40	212	167	430	11	1625.3	109.6	581.1	457.7	1178.6	30.1
2006	55	109	McDonough	9	Central	Mostly Urban	29.5	37723	56	5	60	19	85	1	148.5	13.3	159.1	50.4	225.3	2.7
2006	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	381609	187	30	403	118	592	41	49	7.9	105.6	30.9	155.1	10.7
2006	57	113	McLean	11	Central	Mostly Urban	16.5	198270	225	11	718	107	895	59	113.5	5.5	362.1	54	451.4	29.8
2006	58	115	Macon	6	Central	Mostly Urban	15.3	135101	327	4	722	87	814	1	242	3	534.4	64.4	602.5	0.7
2006	59	117	Macoupin	7	Central	Mostly Rural	58.5	58695	99	204	215	56	479	4	168.7	347.6	366.3	95.4	816.1	6.8
2006	60	119	Madison	3	Southern	Mostly Urban	13.3	325132	696	197	1351	212	1761	1	214.1	60.6	415.5	65.2	541.6	0.3
2006	61	121	Marion	4	Southern	Mostly Urban	45.1	49124	155	228	391	217	879	43	315.5	464.1	795.9	441.7	1789.3	87.5
2006	62	123	Marshall	10	Central	Completely Rural	100	15671	242	14	37	59	123	13	1544.3	89.3	236.1	376.5	784.9	83
2006	63	125	Mason	8	Central	Mostly Rural	77.5	18497	42	29	78	90	201	4	227.1	156.8	421.7	486.6	1086.7	21.6
2006	64	127	Massac	1	Southern	Mostly Rural	50.5	18729	394	32	89	78	218	19	2103.7	170.9	475.2	416.5	1164	101.4
2006	65	129	Menard	8	Central	Mostly Rural	75.7	15385	104	16	31	46	95	2	676	104	201.5	299	617.5	13
2006	66	131	Mercer	14	Central	Mostly Rural	77.8	20296	157	8	53	32	93	0	773.6	39.4	261.1	157.7	458.2	0
2006	67	133	Monroe	20	Southern	Mostly Urban	41.4	39202	178	2	70	1	73	0	454.1	5.1	178.6	2.6	186.2	0
2006	68	135	Montgomery	4	Central	Mostly Urban	41.6	36632	292	193	113	196	502	0	797.1	526.9	308.5	535.1	1370.4	0
2006	69	137	Morgan	7	Central	Mostly Urban	36.2	43254	161	95	177	205	490	13	372.2	219.6	409.2	473.9	1132.8	30.1
2006	70	139	Moultrie	6	Central	Mostly Rural	69.2	17987	38	38	49	73	167	7	211.3	211.3	272.4	405.8	928.4	38.9
2006	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	66373	500	30	159	106	300	5	753.3	45.2	239.6	159.7	452	7.5
2006	72	143	Peoria	10	Central	Mostly Urban	14.6	225746	3446	0	1024	200	1283	59	1526.5	0	453.6	88.6	568.3	26.1
2006	73	145	Perry	20	Southern	Mostly Urban	43.6	27263	303	3	68	38	111	2	1111.4	11	249.4	139.4	407.1	7.3
2006	74	147	Piatt	6	Central	Mostly Rural	67.7	20513	38	65	39	63	173	6	185.2	316.9	190.1	307.1	843.4	29.2
2006	75	149	Pike	8	Central	Mostly Rural	72.3	20261	83	9	83	325	445	28	409.7	44.4	409.7	1604.1	2196.3	138.2
2006	76	151	Pope	1	Southern	Completely Rural	100	5136	25	5	20	32	62	5	486.8	97.4	389.4	623.1	1207.2	97.4
2006	77	153	Pulaski	1	Southern	Completely Rural	100	7911	214	18	61	31	111	1	2705.1	227.5	771.1	391.9	1403.1	12.6
2006	78	155	Putnam	10	Central	Completely Rural	100	7126	58	14	28	25	80	13	813.9	196.5	392.9	350.8	1122.6	182.4
2006	79	157	Randolph	20	Southern	Mostly Urban	42.6	40358	173	3	135	9	147	0	428.7	7.4	334.5	22.3	364.2	0
2006	80	159	Richland	2	Southern	Mostly Urban	43.5	19592	59	49	139	97	304	19	301.1	250.1	709.5	495.1	1551.7	97
2006	81	161	Rock Island	14	Central	Mostly Urban	10.9	178538	385	1212	723	204	2142	3	215.6	678.8	405	114.3	1199.7	1.7
2006	82	163	St. Clair	20	Southern	Mostly Urban	9.8	328267	1120	73	1439	218	1736	6	341.2	22.2	438.4	66.4	528.8	1.8
2006	83	165	Saline	1	Southern	Mostly Urban	43.7	30991	61	111	195	145	453	2	196.8	358.2	629.2	467.9	1461.7	6.5
2006	84	167	Sangamon	7	Central	Mostly Urban	14.1	237285	1236	37	710	453	1200	0	520.9	15.6	299.2	190.9	505.7	0
2006	85	169	Schuyler	8	Central	Mostly Rural	57.6	9052	4	57	59	92	208	0	44.2	629.7	651.8	1016.3	2297.8	0
2006	86	171	Scott	7	Central	Completely Rural	100	6604												
2006	87	173	Shelby	4	Central	Mostly Rural	77.7	27306	276	75	85	123	283	0	1010.8	274.7	311.3	450.5	1036.4	0
2006	88	175	Stark	10	Central	Completely Rural	100	7594	53	3	24	18	50	5	697.9	39.5	316	237	658.4	65.8
2006	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	58405	1459	56	375	233	670	6	2498.1	95.9	642.1	398.9	1147.2	10.3
2006	90	179	Tazewell	10	Central	Mostly Urban	20.4	161436	1486	79	503	336	950	32	920.5	48.9	311.6	208.1	588.5	19.8
2006	91	181	Union	1	Southern	Mostly Rural	65.9	21906	128	17	107	48	181	9	584.3	77.6	488.5	219.1	826.3	41.1
2006	92	183	Vermilion	5	Central	Mostly Urban	31.3	102050	598	166	1115	313	1665	71	586	162.7	1092.6	306.7	1631.6	69.6
2006	93	185	Wabash	2	Southern	Mostly Urban	38.9	15026	44	2	97	99	198	0	292.8	13.3	645.5	658.9	1317.7	0
2006	94	187	Warren	9	Central	Mostly Urban	45.5	21469	60	1	51	22	77	3	279.5	4.7	237.6	102.5	358.7	14
2006	95	189	Washington	20	Southern	Mostly Rural	73.6	18264	161	5	20	26	51	0	881.5	27.4	109.5	142.4	279.2	0
2006	96	191	Wayne	2	Southern	Mostly Rural	69.9	20439	84	16	97	54	168	1	411	78.3	474.6	264.2	822	4.9
2006	97	193	White	2	Southern	Mostly Rural	62	17928	55	48	125	150	335	12	306.8	267.7	697.2	836.7	1868.6	66.9
2006	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	72523	233	201	349	201	763	12	321.3	277.2	481.2	277.2	1052.1	16.5
2006	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	834493	342	150	1308	101	1559	0	41	18	156.7	12.1	186.8	0
2006	100	199	Williamson	1	Southern	Mostly Urban	34.8	77989	121	308	279	237	880	56	155.2	394.9	357.7	303.9	1128.4	71.8
2006	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	358936	1753	1374	1992	1476	4858	16	488.4	382.8	555	411.2	1353.4	4.5
2006	102	203	Woodford	11	Central	Mostly Rural	54.9	46644	861	47	129	131	380	73	1845.9	100.8	276.6	280.9	814.7	156.5
2007	1	1	Adams	8	Central	Mostly Urban	32.6	81697	116	95	444	130	672	3	142	116.3	543.5	159.1	822.6	3.7
2007	2	3	Alexander	1	Southern	Mostly Rural	61.9	10448	152	18	91	36	165	20	1454.8	172.3	871	344.6	1579.2	191.4
2007	3	5	Bond	3	Southern	Mostly Rural	60.7	21641	216	23	87	59	182	13	998.1	106.3	402	272.6	841	60.1
2007	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	68633	621	26	258	91	389	14	904.8	37.9	375.9	132.6	566.8	20.4
2007	5	9	Brown	8	Central	Mostly Urban	41.1	7860	0	29	10	49	88	0	0	369	127.2	623.4	1119.6	0
2007	6	11	Bureau	13	Central	Mostly Rural	57.4	43022	55	7	90	38	135	0	127.8	16.3	209.2	88.3	313.8	0
2007	7	13	Calhoun	8	Southern	Completely Rural	100	6213	19	22	31	38	94	3	305.8	354.1	499	611.6	1513	48.3
2007	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	18879	199	17	57	40	114	0	1054.1	90	301.9	211.9	603.8	0
2007	9	17	Cass	8	Central	Mostly Rural	52.1	16936	69	39	97	20	157	1	407.4	230.3	572.7	118.1	927	5.9
2007	10	19	Champaign	6	Central	Mostly Urban	12.7	232688	2483	200	1060	419	1688	9	1067.1	86	455.5	180.1	725.4	3.9
2007	11	21	Christian	4	Central	Mostly Urban	43.5	42694	376	36	156	93	290	5	880.7	84.3	365.4	217.8	679.3	11.7
2007	12	23	Clark	5	Southern	Mostly Rural	59.5	20395	76	7	93	30	131	1	372.6	34.3	456	147.1	642.3	4.9
2007	13	25	Clay	4	Southern	Mostly Rural	64.7	17060	74	81	97	97	279	4	433.8	474.8	568.6	568.6	1635.4	23.4
2007	14	27	Clinton	4	Southern	Mostly Urban	48.8	45209	292	25	97	97	228	9	645.9	55.3	214.6	214.6	504.3	19.9
2007	15	29	Coles	5	Central	Mostly Urban	24.3	62725	354	44	339	134	537	20	564.4	70.1	540.5	213.6	856.1	31.9
2007	16	31	Cook	co	Northern - Cook	Completely Urban	0	6333262	7707	9599	18461	10668	40541	1813	121.7	151.6	291.5	168.4	640.1	28.6
2007	17	33	Crawford	2	Southern	Mostly Rural	60.2	23738	225	48	116	126	293	3	947.8	202.2	488.7	530.8	1234.3	12.6
2007	18	35	Cumberland	5	Southern	Completely Rural	100	13573	15	8	29	12	52	3	110.5	58.9	213.7	88.4	383.1	22.1
2007	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	125766	272	20	325	131	478	2	216.3	15.9	258.4	104.2	380.1	1.6
2007	20	39	De Witt	6	Central	Mostly Urban	48.8	20431	230	55	74	93	231	9	1125.7	269.2	362.2	455.2	1130.6	44.1
2007	21	41	Douglas	6	Central	Mostly Rural	61.6	24986	118	101	96	109	327	21	472.3	404.2	384.2	436.2	1308.7	84
2007	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1125270	1951	707	2143	770	3650	30	173.4	62.8	190.4	68.4	324.4	2.7
2007	23	45	Edgar	5	Central	Mostly Rural	51.8	22997	78	11	173	87	275	4	339.2	47.8	752.3	378.3	1195.8	17.4
2007	24	47	Edwards	2	Southern	Completely Rural	100	8189	36	17	40	13	74	4	439.6	207.6	488.5	158.7	903.7	48.8
2007	25	49	Effingham	4	Southern	Mostly Rural	59.7	42482	624	67	142	183	406	14	1468.9	157.7	334.3	430.8	955.7	33
2007	26	51	Fayette	4	Southern	Mostly Rural	67	26588	361	209	98	208	515	0	1357.8	786.1	368.6	782.3	1937	0
2007	27	53	Ford	11	Central	Mostly Urban	41.8	17461	174	36	49	122	213	6	996.5	206.2	280.6	698.7	1219.9	34.4
2007	28	55	Franklin	2	Southern	Mostly Urban	48.6	48063	105	30	213	144	400	13	218.5	62.4	443.2	299.6	832.2	27
2007	29	57	Fulton	9	Central	Mostly Rural	60	44719	94	17	172	81	275	5	210.2	38	384.6	181.1	615	11.2
2007	30	59	Gallatin	2	Southern	Completely Rural	100	7092	23	6	49	33	88	0	324.3	84.6	690.9	465.3	1240.8	0
2007	31	61	Greene	7	Central	Mostly Rural	70.8	17076	176	8	66	129	205	2	1030.7	46.8	386.5	755.4	1200.5	11.7
2007	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	60651	104	12	151	22	186	1	171.5	19.8	249	36.3	306.7	1.6
2007	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10228	29	20	24	43	98	11	283.5	195.5	234.6	420.4	958.2	107.5
2007	34	67	Hancock	9	Central	Mostly Rural	71	23449	32	3	58	6	67	0	136.5	12.8	247.3	25.6	285.7	0
2007	35	69	Hardin	2	Southern	Completely Rural	100	5324	38	15	23	57	95	0	713.7	281.7	432	1070.6	1784.4	0
2007	36	71	Henderson	9	Central	Mostly Rural	99.7	8990	31	2	41	10	54	1	344.8	22.2	456.1	111.2	600.7	11.1
2007	37	73	Henry	14	Central	Mostly Rural	50.3	61986	756	19	168	70	257	0	1219.6	30.7	271	112.9	414.6	0
2007	38	75	Iroquois	21	Central	Mostly Rural	71.7	36992	196	0	180	40	220	0	529.8	0	486.6	108.1	594.7	0
2007	39	77	Jackson	1	Southern	Mostly Urban	37.2	69441	229	374	344	219	1010	73	329.8	538.6	495.4	315.4	1454.5	105.1
2007	40	79	Jasper	4	Southern	Mostly Rural	69.9	11916	40	25	51	31	107	0	335.7	209.8	428	260.2	898	0
2007	41	81	Jefferson	2	Southern	Mostly Rural	58.8	47834	71	19	148	53	225	5	148.4	39.7	309.4	110.8	470.4	10.5
2007	42	83	Jersey	7	Southern	Mostly Rural	60.6	27890	54	6	92	17	117	2	193.6	21.5	329.9	61	419.5	7.2
2007	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27307	151	64	52	49	177	12	553	234.4	190.4	179.4	648.2	43.9
2007	44	87	Johnson	1	Southern	Completely Rural	100	15139	53	10	45	33	90	2	350.1	66.1	297.2	218	594.5	13.2
2007	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	634356	1435	126	1598	415	2149	10	226.2	19.9	251.9	65.4	338.8	1.6
2007	46	91	Kankakee	21	Central	Mostly Urban	24.5	138764	162	0	480	152	632	0	116.7	0	345.9	109.5	455.4	0
2007	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	130995	663	41	276	178	498	3	506.1	31.3	210.7	135.9	380.2	2.3
2007	48	95	Knox	9	Central	Mostly Urban	24.3	63293	114	27	239	66	338	6	180.1	42.7	377.6	104.3	534	9.5
2007	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	876802	447	59	1997	925	3070	89	51	6.7	227.8	105.5	350.1	10.2
2007	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	139085	201	13	502	90	614	9	144.5	9.3	360.9	64.7	441.5	6.5
2007	51	101	Lawrence	2	Southern	Mostly Rural	58	20132	134	1	153	70	224	0	665.6	5	760	347.7	1112.7	0
2007	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43702	604	31	203	106	352	12	1382.1	70.9	464.5	242.6	805.5	27.5
2007	53	105	Livingston	11	Central	Mostly Urban	40.8	47546	354	54	150	78	287	5	744.5	113.6	315.5	164.1	603.6	10.5
2007	54	107	Logan	11	Central	Mostly Urban	39.9	36359	494	56	191	135	400	18	1358.7	154	525.3	371.3	1100.1	49.5
2007	55	109	McDonough	9	Central	Mostly Urban	29.5	37820	66	7	67	15	89	0	174.5	18.5	177.2	39.7	235.3	0
2007	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	386291	155	43	412	116	615	44	40.1	11.1	106.7	30	159.2	11.4
2007	57	113	McLean	11	Central	Mostly Urban	16.5	200983	217	10	689	105	865	61	108	5	342.8	52.2	430.4	30.4
2007	58	115	Macon	6	Central	Mostly Urban	15.3	134850	351	5	893	102	1001	1	260.3	3.7	662.2	75.6	742.3	0.7
2007	59	117	Macoupin	7	Central	Mostly Rural	58.5	58611	95	159	212	60	431	0	162.1	271.3	361.7	102.4	735.4	0
2007	60	119	Madison	3	Southern	Mostly Urban	13.3	326049	747	226	1456	213	1895	0	229.1	69.3	446.6	65.3	581.2	0
2007	61	121	Marion	4	Southern	Mostly Urban	45.1	48888	109	303	403	209	948	33	223	619.8	824.3	427.5	1939.1	67.5
2007	62	123	Marshall	10	Central	Completely Rural	100	15643	166	17	32	38	96	9	1061.2	108.7	204.6	242.9	613.7	57.5
2007	63	125	Mason	8	Central	Mostly Rural	77.5	18378	54	37	89	66	196	4	293.8	201.3	484.3	359.1	1066.5	21.8
2007	64	127	Massac	1	Southern	Mostly Rural	50.5	18800	417	25	93	85	226	23	2218.1	133	494.7	452.1	1202.1	122.3
2007	65	129	Menard	8	Central	Mostly Rural	75.7	15592	91	7	33	26	67	1	583.6	44.9	211.6	166.8	429.7	6.4
2007	66	131	Mercer	14	Central	Mostly Rural	77.8	20224	152	9	57	45	112	1	751.6	44.5	281.8	222.5	553.8	4.9
2007	67	133	Monroe	20	Southern	Mostly Urban	41.4	39700	298	0	71	2	73	0	750.6	0	178.8	5	183.9	0
2007	68	135	Montgomery	4	Central	Mostly Urban	41.6	36448	434	202	120	192	514	0	1190.7	554.2	329.2	526.8	1410.2	0
2007	69	137	Morgan	7	Central	Mostly Urban	36.2	43160	214	99	186	207	511	19	495.8	229.4	431	479.6	1184	44
2007	70	139	Moultrie	6	Central	Mostly Rural	69.2	18113	61	54	31	50	141	6	336.8	298.1	171.1	276	778.4	33.1
2007	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	66469	485	24	130	118	275	3	729.7	36.1	195.6	177.5	413.7	4.5
2007	72	143	Peoria	10	Central	Mostly Urban	14.6	226289	3358	0	1171	288	1536	77	1483.9	0	517.5	127.3	678.8	34
2007	73	145	Perry	20	Southern	Mostly Urban	43.6	27049	329	3	64	41	108	0	1216.3	11.1	236.6	151.6	399.3	0
2007	74	147	Piatt	6	Central	Mostly Rural	67.7	20467	31	53	39	66	163	5	151.5	259	190.6	322.5	796.4	24.4
2007	75	149	Pike	8	Central	Mostly Rural	72.3	20429	174	114	146	112	380	8	851.7	558	714.7	548.2	1860.1	39.2
2007	76	151	Pope	1	Southern	Completely Rural	100	5188	30	10	19	22	54	3	578.3	192.8	366.2	424.1	1040.9	57.8
2007	77	153	Pulaski	1	Southern	Completely Rural	100	7826	259	26	68	25	121	2	3309.5	332.2	868.9	319.4	1546.1	25.6
2007	78	155	Putnam	10	Central	Completely Rural	100	7217	65	10	27	22	68	9	900.7	138.6	374.1	304.8	942.2	124.7
2007	79	157	Randolph	20	Southern	Mostly Urban	42.6	40096	180	5	130	17	153	1	448.9	12.5	324.2	42.4	381.6	2.5
2007	80	159	Richland	2	Southern	Mostly Urban	43.5	19508	44	40	137	68	253	8	225.5	205	702.3	348.6	1296.9	41
2007	81	161	Rock Island	14	Central	Mostly Urban	10.9	179172	330	1342	718	198	2265	7	184.2	749	400.7	110.5	1264.1	3.9
2007	82	163	St. Clair	20	Southern	Mostly Urban	9.8	329282	940	75	1462	218	1772	17	285.5	22.8	444	66.2	538.1	5.2
2007	83	165	Saline	1	Southern	Mostly Urban	43.7	30837	65	104	212	181	505	8	210.8	337.3	687.5	587	1637.6	25.9
2007	84	167	Sangamon	7	Central	Mostly Urban	14.1	237818	1536	27	695	378	1100	0	645.9	11.4	292.2	158.9	462.5	0
2007	85	169	Schuyler	8	Central	Mostly Rural	57.6	9075	0	48	71	97	217	1	0	528.9	782.4	1068.9	2391.2	11
2007	86	171	Scott	7	Central	Completely Rural	100	6601												
2007	87	173	Shelby	4	Central	Mostly Rural	77.7	27183	316	65	83	112	260	0	1162.5	239.1	305.3	412	956.5	0
2007	88	175	Stark	10	Central	Completely Rural	100	7564	49	3	25	19	47	0	647.8	39.7	330.5	251.2	621.4	0
2007	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	58148	1595	44	411	230	698	13	2743	75.7	706.8	395.5	1200.4	22.4
2007	90	179	Tazewell	10	Central	Mostly Urban	20.4	162966	1459	106	501	310	959	42	895.3	65	307.4	190.2	588.5	25.8
2007	91	181	Union	1	Southern	Mostly Rural	65.9	21859	152	18	92	38	163	15	695.4	82.3	420.9	173.8	745.7	68.6
2007	92	183	Vermilion	5	Central	Mostly Urban	31.3	101421	581	177	1244	383	1890	86	572.9	174.5	1226.6	377.6	1863.5	84.8
2007	93	185	Wabash	2	Southern	Mostly Urban	38.9	14846	48	12	84	115	213	2	323.3	80.8	565.8	774.6	1434.7	13.5
2007	94	187	Warren	9	Central	Mostly Urban	45.5	21543	50	2	55	34	94	3	232.1	9.3	255.3	157.8	436.3	13.9
2007	95	189	Washington	20	Southern	Mostly Rural	73.6	18097	140	1	22	15	39	1	773.6	5.5	121.6	82.9	215.5	5.5
2007	96	191	Wayne	2	Southern	Mostly Rural	69.9	20585	83	16	79	64	164	5	403.2	77.7	383.8	310.9	796.7	24.3
2007	97	193	White	2	Southern	Mostly Rural	62	17751	48	47	103	136	297	11	270.4	264.8	580.2	766.2	1673.1	62
2007	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	71987	256	241	364	199	811	7	355.6	334.8	505.6	276.4	1126.6	9.7
2007	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	850348	442	185	1303	140	1629	1	52	21.8	153.2	16.5	191.6	0.1
2007	100	199	Williamson	1	Southern	Mostly Urban	34.8	79013	149	348	286	307	998	57	188.6	440.4	362	388.5	1263.1	72.1
2007	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	364466	2499	1784	1863	1370	5037	20	685.7	489.5	511.2	375.9	1382	5.5
2007	102	203	Woodford	11	Central	Mostly Rural	54.9	47356	891	74	121	136	408	77	1881.5	156.3	255.5	287.2	861.6	162.6
2008	1	1	Adams	8	Central	Mostly Urban	32.6	81539	113	84	427	125	637	1	138.6	103	523.7	153.3	781.2	1.2
2008	2	3	Alexander	1	Southern	Mostly Rural	61.9	10306	123	52	108	33	214	21	1193.5	504.6	1047.9	320.2	2076.5	203.8
2008	3	5	Bond	3	Southern	Mostly Rural	60.7	21414	241	18	101	56	194	18	1125.4	84.1	471.7	261.5	905.9	84.1
2008	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	69427	757	43	245	113	411	10	1090.4	61.9	352.9	162.8	592	14.4
2008	5	9	Brown	8	Central	Mostly Urban	41.1	7944	2	34	6	51	104	13	25.2	428	75.5	642	1309.2	163.6
2008	6	11	Bureau	13	Central	Mostly Rural	57.4	42828	47	4	84	43	133	2	109.7	9.3	196.1	100.4	310.5	4.7
2008	7	13	Calhoun	8	Southern	Completely Rural	100	6119	13	17	23	15	56	1	212.5	277.8	375.9	245.1	915.2	16.3
2008	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	18739	196	11	64	44	119	0	1045.9	58.7	341.5	234.8	635	0
2008	9	17	Cass	8	Central	Mostly Rural	52.1	16833	28	48	114	25	188	1	166.3	285.2	677.2	148.5	1116.9	5.9
2008	10	19	Champaign	6	Central	Mostly Urban	12.7	233656	460	186	1005	330	1534	13	196.9	79.6	430.1	141.2	656.5	5.6
2008	11	21	Christian	4	Central	Mostly Urban	43.5	42524	381	40	136	90	279	13	896	94.1	319.8	211.6	656.1	30.6
2008	12	23	Clark	5	Southern	Mostly Rural	59.5	20291	0	8	92	30	130	0	0	39.4	453.4	147.8	640.7	0
2008	13	25	Clay	4	Southern	Mostly Rural	64.7	17067	93	60	96	88	252	0	544.9	351.6	562.5	515.6	1476.5	0
2008	14	27	Clinton	4	Southern	Mostly Urban	48.8	45568	282	28	104	111	248	5	618.9	61.4	228.2	243.6	544.2	11
2008	15	29	Coles	5	Central	Mostly Urban	24.3	62705	376	49	299	142	511	21	599.6	78.1	476.8	226.5	814.9	33.5
2008	16	31	Cook	co	Northern - Cook	Completely Urban	0	6328120	8133	10238	18851	11738	42749	1922	128.5	161.8	297.9	185.5	675.5	30.4
2008	17	33	Crawford	2	Southern	Mostly Rural	60.2	23645	269	41	108	127	281	5	1137.7	173.4	456.8	537.1	1188.4	21.1
2008	18	35	Cumberland	5	Southern	Completely Rural	100	13590	23	14	28	14	62	6	169.2	103	206	103	456.2	44.2
2008	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	126735	282	14	328	135	480	3	222.5	11	258.8	106.5	378.7	2.4
2008	20	39	De Witt	6	Central	Mostly Urban	48.8	20421	129	82	84	149	345	30	631.7	401.5	411.3	729.6	1689.4	146.9
2008	21	41	Douglas	6	Central	Mostly Rural	61.6	24898	215	96	96	98	310	20	863.5	385.6	385.6	393.6	1245.1	80.3
2008	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1125046	2072	777	2040	817	3662	28	184.2	69.1	181.3	72.6	325.5	2.5
2008	23	45	Edgar	5	Central	Mostly Rural	51.8	22770	75	15	163	77	257	2	329.4	65.9	715.9	338.2	1128.7	8.8
2008	24	47	Edwards	2	Southern	Completely Rural	100	8175	22	21	42	20	88	5	269.1	256.9	513.8	244.6	1076.5	61.2
2008	25	49	Effingham	4	Southern	Mostly Rural	59.7	42265	717	59	155	177	413	22	1696.4	139.6	366.7	418.8	977.2	52.1
2008	26	51	Fayette	4	Southern	Mostly Rural	67	26661	419	228	54	224	506	0	1571.6	855.2	202.5	840.2	1897.9	0
2008	27	53	Ford	11	Central	Mostly Urban	41.8	17333	124	19	48	71	144	6	715.4	109.6	276.9	409.6	830.8	34.6
2008	28	55	Franklin	2	Southern	Mostly Urban	48.6	48091	98	32	209	147	399	11	203.8	66.5	434.6	305.7	829.7	22.9
2008	29	57	Fulton	9	Central	Mostly Rural	60	44611	80	13	163	76	259	7	179.3	29.1	365.4	170.4	580.6	15.7
2008	30	59	Gallatin	2	Southern	Completely Rural	100	6962	28	5	62	31	98	0	402.2	71.8	890.5	445.3	1407.6	0
2008	31	61	Greene	7	Central	Mostly Rural	70.8	16977	176	8	73	137	222	4	1036.7	47.1	430	807	1307.7	23.6
2008	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	61935	116	11	149	27	188	1	187.3	17.8	240.6	43.6	303.5	1.6
2008	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10265	24	18	31	43	104	12	233.8	175.4	302	418.9	1013.2	116.9
2008	34	67	Hancock	9	Central	Mostly Rural	71	23171	21	0	57	3	60	0	90.6	0	246	12.9	258.9	0
2008	35	69	Hardin	2	Southern	Completely Rural	100	5240	21	10	28	58	96	0	400.8	190.8	534.4	1106.9	1832.1	0
2008	36	71	Henderson	9	Central	Mostly Rural	99.7	8863	27	1	43	9	54	1	304.6	11.3	485.2	101.5	609.3	11.3
2008	37	73	Henry	14	Central	Mostly Rural	50.3	61948	777	26	187	67	281	1	1254.3	42	301.9	108.2	453.6	1.6
2008	38	75	Iroquois	21	Central	Mostly Rural	71.7	36991	169	5	179	56	241	1	456.9	13.5	483.9	151.4	651.5	2.7
2008	39	77	Jackson	1	Southern	Mostly Urban	37.2	69490	191	285	397	191	993	120	274.9	410.1	571.3	274.9	1429	172.7
2008	40	79	Jasper	4	Southern	Mostly Rural	69.9	11923	29	29	53	44	126	0	243.2	243.2	444.5	369	1056.8	0
2008	41	81	Jefferson	2	Southern	Mostly Rural	58.8	47582	69	27	165	41	236	3	145	56.7	346.8	86.2	496	6.3
2008	42	83	Jersey	7	Southern	Mostly Rural	60.6	28147	56	4	103	21	128	0	199	14.2	365.9	74.6	454.8	0
2008	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27241	159	73	67	55	206	11	583.7	268	246	201.9	756.2	40.4
2008	44	87	Johnson	1	Southern	Completely Rural	100	14957	50	11	60	23	100	6	334.3	73.5	401.1	153.8	668.6	40.1
2008	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	644328	1317	177	2068	472	2743	26	204.4	27.5	321	73.3	425.7	4
2008	46	91	Kankakee	21	Central	Mostly Urban	24.5	139928	168	0	529	146	675	0	120.1	0	378.1	104.3	482.4	0
2008	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	141250	883	59	304	173	549	13	625.1	41.8	215.2	122.5	388.7	9.2
2008	48	95	Knox	9	Central	Mostly Urban	24.3	63128	113	44	223	53	323	3	179	69.7	353.3	84	511.7	4.8
2008	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	880133	524	49	2066	962	3222	145	59.5	5.6	234.7	109.3	366.1	16.5
2008	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	139358	201	13	483	75	580	9	144.2	9.3	346.6	53.8	416.2	6.5
2008	51	101	Lawrence	2	Southern	Mostly Rural	58	20081	114	2	129	57	188	0	567.7	10	642.4	283.9	936.2	0
2008	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43775	629	46	167	115	342	14	1436.9	105.1	381.5	262.7	781.3	32
2008	53	105	Livingston	11	Central	Mostly Urban	40.8	47399	370	52	165	81	302	4	780.6	109.7	348.1	170.9	637.1	8.4
2008	54	107	Logan	11	Central	Mostly Urban	39.9	36350	554	58	201	139	436	38	1524.1	159.6	553	382.4	1199.4	104.5
2008	55	109	McDonough	9	Central	Mostly Urban	29.5	37405	71	12	87	21	123	3	189.8	32.1	232.6	56.1	328.8	8
2008	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	387746	194	57	474	142	718	45	50	14.7	122.2	36.6	185.2	11.6
2008	57	113	McLean	11	Central	Mostly Urban	16.5	202787	224	23	702	106	877	46	110.5	11.3	346.2	52.3	432.5	22.7
2008	58	115	Macon	6	Central	Mostly Urban	15.3	134404	423	3	949	183	1135	0	314.7	2.2	706.1	136.2	844.5	0
2008	59	117	Macoupin	7	Central	Mostly Rural	58.5	58444	94	179	197	40	421	5	160.8	306.3	337.1	68.4	720.3	8.6
2008	60	119	Madison	3	Southern	Mostly Urban	13.3	326604	822	251	1455	213	1919	0	251.7	76.9	445.5	65.2	587.6	0
2008	61	121	Marion	4	Southern	Mostly Urban	45.1	48733	95	306	385	161	882	30	194.9	627.9	790	330.4	1809.9	61.6
2008	62	123	Marshall	10	Central	Completely Rural	100	15385	195	15	38	47	109	9	1267.5	97.5	247	305.5	708.5	58.5
2008	63	125	Mason	8	Central	Mostly Rural	77.5	18179	53	39	78	58	179	4	291.5	214.5	429.1	319	984.7	22
2008	64	127	Massac	1	Southern	Mostly Rural	50.5	18759	261	47	120	72	260	23	1391.3	250.5	639.7	383.8	1386	122.6
2008	65	129	Menard	8	Central	Mostly Rural	75.7	15603	94	12	40	21	75	2	602.4	76.9	256.4	134.6	480.7	12.8
2008	66	131	Mercer	14	Central	Mostly Rural	77.8	20281	137	8	64	46	119	1	675.5	39.4	315.6	226.8	586.8	4.9
2008	67	133	Monroe	20	Southern	Mostly Urban	41.4	40102	386	0	75	3	78	0	962.5	0	187	7.5	194.5	0
2008	68	135	Montgomery	4	Central	Mostly Urban	41.6	36375	298	141	106	125	372	0	819.2	387.6	291.4	343.6	1022.7	0
2008	69	137	Morgan	7	Central	Mostly Urban	36.2	42887	235	134	185	178	509	12	548	312.4	431.4	415	1186.8	28
2008	70	139	Moultrie	6	Central	Mostly Rural	69.2	18220	68	36	39	36	133	22	373.2	197.6	214.1	197.6	730	120.7
2008	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	66536	514	30	126	107	266	3	772.5	45.1	189.4	160.8	399.8	4.5
2008	72	143	Peoria	10	Central	Mostly Urban	14.6	227112	3349	7	1080	204	1371	80	1474.6	3.1	475.5	89.8	603.7	35.2
2008	73	145	Perry	20	Southern	Mostly Urban	43.6	26844	294	6	64	28	102	4	1095.2	22.4	238.4	104.3	380	14.9
2008	74	147	Piatt	6	Central	Mostly Rural	67.7	20493	35	44	38	70	162	10	170.8	214.7	185.4	341.6	790.5	48.8
2008	75	149	Pike	8	Central	Mostly Rural	72.3	20221	137	137	158	138	442	9	677.5	677.5	781.4	682.5	2185.8	44.5
2008	76	151	Pope	1	Southern	Completely Rural	100	5128	25	7	18	6	33	2	487.5	136.5	351	117	643.5	39
2008	77	153	Pulaski	1	Southern	Completely Rural	100	7620	291	21	65	19	110	5	3818.9	275.6	853	249.3	1443.6	65.6
2008	78	155	Putnam	10	Central	Completely Rural	100	7224	75	11	31	18	61	1	1038.2	152.3	429.1	249.2	844.4	13.8
2008	79	157	Randolph	20	Southern	Mostly Urban	42.6	40021	151	1	128	15	145	1	377.3	2.5	319.8	37.5	362.3	2.5
2008	80	159	Richland	2	Southern	Mostly Urban	43.5	19378	42	14	102	21	139	2	216.7	72.2	526.4	108.4	717.3	10.3
2008	81	161	Rock Island	14	Central	Mostly Urban	10.9	178836	309	1468	808	227	2515	12	172.8	820.9	451.8	126.9	1406.3	6.7
2008	82	163	St. Clair	20	Southern	Mostly Urban	9.8	330950	1273	57	1184	103	1345	1	384.7	17.2	357.8	31.1	406.4	0.3
2008	83	165	Saline	1	Southern	Mostly Urban	43.7	30544	60	151	265	113	536	7	196.4	494.4	867.6	370	1754.8	22.9
2008	84	167	Sangamon	7	Central	Mostly Urban	14.1	239011	1660	24	563	345	932	0	694.5	10	235.6	144.3	389.9	0
2008	85	169	Schuyler	8	Central	Mostly Rural	57.6	9060	6	50	68	95	214	1	66.2	551.9	750.6	1048.6	2362	11
2008	86	171	Scott	7	Central	Completely Rural	100	6611												
2008	87	173	Shelby	4	Central	Mostly Rural	77.7	27210	300	56	79	119	254	0	1102.5	205.8	290.3	437.3	933.5	0
2008	88	175	Stark	10	Central	Completely Rural	100	7524	46	5	22	18	46	1	611.4	66.5	292.4	239.2	611.4	13.3
2008	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	58060	1859	41	443	209	700	7	3201.9	70.6	763	360	1205.6	12.1
2008	90	179	Tazewell	10	Central	Mostly Urban	20.4	163717	1409	95	526	289	944	34	860.6	58	321.3	176.5	576.6	20.8
2008	91	181	Union	1	Southern	Mostly Rural	65.9	21696	113	22	103	23	157	9	520.8	101.4	474.7	106	723.6	41.5
2008	92	183	Vermilion	5	Central	Mostly Urban	31.3	100947	585	206	1444	533	2286	103	579.5	204.1	1430.5	528	2264.6	102
2008	93	185	Wabash	2	Southern	Mostly Urban	38.9	14716	53	29	75	78	186	4	360.2	197.1	509.6	530	1263.9	27.2
2008	94	187	Warren	9	Central	Mostly Urban	45.5	21308	48	4	56	27	89	2	225.3	18.8	262.8	126.7	417.7	9.4
2008	95	189	Washington	20	Southern	Mostly Rural	73.6	17992	123	0	21	11	33	1	683.6	0	116.7	61.1	183.4	5.6
2008	96	191	Wayne	2	Southern	Mostly Rural	69.9	20599	101	25	60	53	145	7	490.3	121.4	291.3	257.3	703.9	34
2008	97	193	White	2	Southern	Mostly Rural	62	17874	56	7	92	38	142	5	313.3	39.2	514.7	212.6	794.5	28
2008	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	71908	373	233	364	216	824	11	518.7	324	506.2	300.4	1145.9	15.3
2008	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	858809	394	211	1372	171	1754	0	45.9	24.6	159.8	19.9	204.2	0
2008	100	199	Williamson	1	Southern	Mostly Urban	34.8	79609	144	292	327	183	868	66	180.9	366.8	410.8	229.9	1090.3	82.9
2008	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	366310	2524	1900	1819	1314	5057	24	689	518.7	496.6	358.7	1380.5	6.6
2008	102	203	Woodford	11	Central	Mostly Rural	54.9	47995	817	61	136	115	362	50	1702.3	127.1	283.4	239.6	754.2	104.2
2009	1	1	Adams	8	Central	Mostly Urban	32.6	81610	84	82	411	128	627	6	102.9	100.5	503.6	156.8	768.3	7.4
2009	2	3	Alexander	1	Southern	Mostly Rural	61.9	10057	160	11	104	32	176	29	1590.9	109.4	1034.1	318.2	1750	288.4
2009	3	5	Bond	3	Southern	Mostly Rural	60.7	21132	223	20	120	71	227	16	1055.3	94.6	567.9	336	1074.2	75.7
2009	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	68991	979	21	214	77	319	7	1419	30.4	310.2	111.6	462.4	10.1
2009	5	9	Brown	8	Central	Mostly Urban	41.1	8011	4	38	12	42	99	7	49.9	474.3	149.8	524.3	1235.8	87.4
2009	6	11	Bureau	13	Central	Mostly Rural	57.4	42704	29	8	81	38	128	1	67.9	18.7	189.7	89	299.7	2.3
2009	7	13	Calhoun	8	Southern	Completely Rural	100	6124	3	9	23	29	63	2	49	147	375.6	473.5	1028.7	32.7
2009	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	18472	215	12	67	39	118	0	1163.9	65	362.7	211.1	638.8	0
2009	9	17	Cass	8	Central	Mostly Rural	52.1	16756	23	44	139	20	204	1	137.3	262.6	829.6	119.4	1217.5	6
2009	10	19	Champaign	6	Central	Mostly Urban	12.7	236497	484	187	1113	361	1675	14	204.7	79.1	470.6	152.6	708.3	5.9
2009	11	21	Christian	4	Central	Mostly Urban	43.5	42168	382	40	114	109	276	13	905.9	94.9	270.3	258.5	654.5	30.8
2009	12	23	Clark	5	Southern	Mostly Rural	59.5	19978	69	5	84	28	119	2	345.4	25	420.5	140.2	595.7	10
2009	13	25	Clay	4	Southern	Mostly Rural	64.7	16837	115	53	78	76	214	7	683	314.8	463.3	451.4	1271	41.6
2009	14	27	Clinton	4	Southern	Mostly Urban	48.8	45452	254	41	88	99	229	1	558.8	90.2	193.6	217.8	503.8	2.2
2009	15	29	Coles	5	Central	Mostly Urban	24.3	62892	460	48	277	113	451	13	731.4	76.3	440.4	179.7	717.1	20.7
2009	16	31	Cook	co	Northern - Cook	Completely Urban	0	6342520	7421	10731	18510	12478	43510	1791	117	169.2	291.8	196.7	686	28.2
2009	17	33	Crawford	2	Southern	Mostly Rural	60.2	23605	264	43	102	140	289	4	1118.4	182.2	432.1	593.1	1224.3	16.9
2009	18	35	Cumberland	5	Southern	Completely Rural	100	13519	20	10	26	9	50	5	147.9	74	192.3	66.6	369.8	37
2009	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	127335	277	24	307	152	484	1	217.5	18.8	241.1	119.4	380.1	0.8
2009	20	39	De Witt	6	Central	Mostly Urban	48.8	20126	195	60	64	44	182	14	968.9	298.1	318	218.6	904.3	69.6
2009	21	41	Douglas	6	Central	Mostly Rural	61.6	24889	204	80	89	86	266	11	819.6	321.4	357.6	345.5	1068.7	44.2
2009	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1126491	2219	699	1911	1036	3665	19	197	62.1	169.6	92	325.3	1.7
2009	23	45	Edgar	5	Central	Mostly Rural	51.8	22611	67	9	146	61	217	1	296.3	39.8	645.7	269.8	959.7	4.4
2009	24	47	Edwards	2	Southern	Completely Rural	100	8104	17	14	30	21	70	5	209.8	172.8	370.2	259.1	863.8	61.7
2009	25	49	Effingham	4	Southern	Mostly Rural	59.7	42271	667	74	152	162	408	20	1577.9	175.1	359.6	383.2	965.2	47.3
2009	26	51	Fayette	4	Southern	Mostly Rural	67	26770	490	87	136	110	336	3	1830.4	325	508	410.9	1255.1	11.2
2009	27	53	Ford	11	Central	Mostly Urban	41.8	17284	56	45	70	99	220	6	324	260.4	405	572.8	1272.9	34.7
2009	28	55	Franklin	2	Southern	Mostly Urban	48.6	47940	80	19	236	140	403	8	166.9	39.6	492.3	292	840.6	16.7
2009	29	57	Fulton	9	Central	Mostly Rural	60	44353	73	17	165	89	275	4	164.6	38.3	372	200.7	620	9
2009	30	59	Gallatin	2	Southern	Completely Rural	100	6724	30	6	54	30	90	0	446.2	89.2	803.1	446.2	1338.5	0
2009	31	61	Greene	7	Central	Mostly Rural	70.8	16937	176	10	71	161	247	5	1039.1	59	419.2	950.6	1458.3	29.5
2009	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	62536	111	5	177	31	215	2	177.5	8	283	49.6	343.8	3.2
2009	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10278	15	6	39	18	65	2	145.9	58.4	379.5	175.1	632.4	19.5
2009	34	67	Hancock	9	Central	Mostly Rural	71	23009	12	1	45	1	47	0	52.2	4.3	195.6	4.3	204.3	0
2009	35	69	Hardin	2	Southern	Completely Rural	100	5186	21	9	20	59	88	0	404.9	173.5	385.7	1137.7	1696.9	0
2009	36	71	Henderson	9	Central	Mostly Rural	99.7	8713	26	0	31	9	40	0	298.4	0	355.8	103.3	459.1	0
2009	37	73	Henry	14	Central	Mostly Rural	50.3	61939	628	34	178	82	295	1	1013.9	54.9	287.4	132.4	476.3	1.6
2009	38	75	Iroquois	21	Central	Mostly Rural	71.7	36491	121	8	190	34	233	1	331.6	21.9	520.7	93.2	638.5	2.7
2009	39	77	Jackson	1	Southern	Mostly Urban	37.2	69537	204	322	376	210	1096	188	293.4	463.1	540.7	302	1576.1	270.4
2009	40	79	Jasper	4	Southern	Mostly Rural	69.9	11798	43	29	36	50	115	0	364.5	245.8	305.1	423.8	974.7	0
2009	41	81	Jefferson	2	Southern	Mostly Rural	58.8	47180	70	45	200	48	294	1	148.4	95.4	423.9	101.7	623.1	2.1
2009	42	83	Jersey	7	Southern	Mostly Rural	60.6	28047	42	9	87	19	117	2	149.7	32.1	310.2	67.7	417.2	7.1
2009	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27164	160	66	71	63	211	11	589	243	261.4	231.9	776.8	40.5
2009	44	87	Johnson	1	Southern	Completely Rural	100	14868	39	11	67	23	110	9	262.3	74	450.6	154.7	739.8	60.5
2009	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	652060	1469	224	2152	550	2967	41	225.3	34.4	330	84.3	455	6.3
2009	46	91	Kankakee	21	Central	Mostly Urban	24.5	140312	170	0	562	186	748	0	121.2	0	400.5	132.6	533.1	0
2009	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	146272	1032	55	313	211	593	14	705.5	37.6	214	144.3	405.4	9.6
2009	48	95	Knox	9	Central	Mostly Urban	24.3	63114	144	59	210	41	311	1	228.2	93.5	332.7	65	492.8	1.6
2009	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	882988	461	58	1552	631	2355	114	52.2	6.6	175.8	71.5	266.7	12.9
2009	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	138852	215	17	531	77	632	7	154.8	12.2	382.4	55.5	455.2	5
2009	51	101	Lawrence	2	Southern	Mostly Rural	58	19839	151	4	115	76	197	2	761.1	20.2	579.7	383.1	993	10.1
2009	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43524	559	43	153	79	296	21	1284.3	98.8	351.5	181.5	680.1	48.2
2009	53	105	Livingston	11	Central	Mostly Urban	40.8	47293	415	48	187	117	352	0	877.5	101.5	395.4	247.4	744.3	0
2009	54	107	Logan	11	Central	Mostly Urban	39.9	36114	414	92	228	166	570	84	1146.4	254.7	631.3	459.7	1578.3	232.6
2009	55	109	McDonough	9	Central	Mostly Urban	29.5	37477	111	7	84	19	113	3	296.2	18.7	224.1	50.7	301.5	8
2009	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	387781	202	68	495	180	772	29	52.1	17.5	127.6	46.4	199.1	7.5
2009	57	113	McLean	11	Central	Mostly Urban	16.5	204942	269	28	713	109	873	23	131.3	13.7	347.9	53.2	426	11.2
2009	58	115	Macon	6	Central	Mostly Urban	15.3	134474	209	341	1049	346	1736	0	155.4	253.6	780.1	257.3	1291	0
2009	59	117	Macoupin	7	Central	Mostly Rural	58.5	57727	149	216	232	63	514	3	258.1	374.2	401.9	109.1	890.4	5.2
2009	60	119	Madison	3	Southern	Mostly Urban	13.3	327179	995	327	1518	227	2072	0	304.1	99.9	464	69.4	633.3	0
2009	61	121	Marion	4	Southern	Mostly Urban	45.1	48237	84	321	378	279	1027	49	174.1	665.5	783.6	578.4	2129.1	101.6
2009	62	123	Marshall	10	Central	Completely Rural	100	15270	202	11	46	62	129	10	1322.9	72	301.2	406	844.8	65.5
2009	63	125	Mason	8	Central	Mostly Rural	77.5	17898	51	34	64	48	148	2	284.9	190	357.6	268.2	826.9	11.2
2009	64	127	Massac	1	Southern	Mostly Rural	50.5	18769	433	42	110	85	265	28	2307	223.8	586.1	452.9	1411.9	149.2
2009	65	129	Menard	8	Central	Mostly Rural	75.7	15516	106	18	33	30	81	0	683.2	116	212.7	193.3	522	0
2009	66	131	Mercer	14	Central	Mostly Rural	77.8	19962	108	3	64	44	112	1	541	15	320.6	220.4	561.1	5
2009	67	133	Monroe	20	Southern	Mostly Urban	41.4	40490	400	0	66	1	67	0	987.9	0	163	2.5	165.5	0
2009	68	135	Montgomery	4	Central	Mostly Urban	41.6	36126	287	151	105	188	444	0	794.4	418	290.6	520.4	1229	0
2009	69	137	Morgan	7	Central	Mostly Urban	36.2	42707	237	131	168	195	506	12	554.9	306.7	393.4	456.6	1184.8	28.1
2009	70	139	Moultrie	6	Central	Mostly Rural	69.2	18311	41	39	42	49	141	11	223.9	213	229.4	267.6	770	60.1
2009	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	66141	514	22	146	108	285	9	777.1	33.3	220.7	163.3	430.9	13.6
2009	72	143	Peoria	10	Central	Mostly Urban	14.6	229707	3614	5	1021	203	1327	98	1573.3	2.2	444.5	88.4	577.7	42.7
2009	73	145	Perry	20	Southern	Mostly Urban	43.6	26769	277	8	55	18	82	1	1034.8	29.9	205.5	67.2	306.3	3.7
2009	74	147	Piatt	6	Central	Mostly Rural	67.7	20601	45	42	47	109	218	20	218.4	203.9	228.1	529.1	1058.2	97.1
2009	75	149	Pike	8	Central	Mostly Rural	72.3	19989	152	116	118	124	363	5	760.4	580.3	590.3	620.3	1816	25
2009	76	151	Pope	1	Southern	Completely Rural	100	5164	19	3	19	15	40	3	367.9	58.1	367.9	290.5	774.6	58.1
2009	77	153	Pulaski	1	Southern	Completely Rural	100	7528	269	18	56	31	113	8	3573.3	239.1	743.9	411.8	1501.1	106.3
2009	78	155	Putnam	10	Central	Completely Rural	100	7231	52	5	25	22	54	2	719.1	69.1	345.7	304.2	746.8	27.7
2009	79	157	Randolph	20	Southern	Mostly Urban	42.6	39861	188	0	93	10	103	0	471.6	0	233.3	25.1	258.4	0
2009	80	159	Richland	2	Southern	Mostly Urban	43.5	19602	1	20	98	29	150	3	5.1	102	499.9	147.9	765.2	15.3
2009	81	161	Rock Island	14	Central	Mostly Urban	10.9	178868	246	1557	805	278	2663	23	137.5	870.5	450.1	155.4	1488.8	12.9
2009	82	163	St. Clair	20	Southern	Mostly Urban	9.8	332918	1261	58	1183	101	1344	2	378.8	17.4	355.3	30.3	403.7	0.6
2009	83	165	Saline	1	Southern	Mostly Urban	43.7	30188	35	163	294	181	647	9	115.9	539.9	973.9	599.6	2143.2	29.8
2009	84	167	Sangamon	7	Central	Mostly Urban	14.1	240004	1674	36	578	315	929	0	697.5	15	240.8	131.2	387.1	0
2009	85	169	Schuyler	8	Central	Mostly Rural	57.6	8950	7	35	54	80	171	2	78.2	391.1	603.4	893.9	1910.6	22.3
2009	86	171	Scott	7	Central	Completely Rural	100	6579												
2009	87	173	Shelby	4	Central	Mostly Rural	77.7	27129	303	59	78	123	260	0	1116.9	217.5	287.5	453.4	958.4	0
2009	88	175	Stark	10	Central	Completely Rural	100	7421	35	6	18	19	51	8	471.6	80.9	242.6	256	687.2	107.8
2009	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	57981	1814	26	409	215	656	6	3128.6	44.8	705.4	370.8	1131.4	10.3
2009	90	179	Tazewell	10	Central	Mostly Urban	20.4	165054	1626	104	523	262	930	41	985.1	63	316.9	158.7	563.5	24.8
2009	91	181	Union	1	Southern	Mostly Rural	65.9	21586	83	51	100	54	241	36	384.5	236.3	463.3	250.2	1116.5	166.8
2009	92	183	Vermilion	5	Central	Mostly Urban	31.3	100646	938	157	527	311	1111	116	932	156	523.6	309	1103.9	115.3
2009	93	185	Wabash	2	Southern	Mostly Urban	38.9	14592	69	24	91	81	200	4	472.9	164.5	623.6	555.1	1370.6	27.4
2009	94	187	Warren	9	Central	Mostly Urban	45.5	21387	41	3	59	21	83	0	191.7	14	275.9	98.2	388.1	0
2009	95	189	Washington	20	Southern	Mostly Rural	73.6	17870	89	0	27	4	32	1	498	0	151.1	22.4	179.1	5.6
2009	96	191	Wayne	2	Southern	Mostly Rural	69.9	20396	98	22	62	52	140	4	480.5	107.9	304	255	686.4	19.6
2009	97	193	White	2	Southern	Mostly Rural	62	17722	41	11	71	48	133	3	231.4	62.1	400.6	270.8	750.5	16.9
2009	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	71680	402	199	386	185	775	5	560.8	277.6	538.5	258.1	1081.2	7
2009	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	861441	474	202	1375	205	1782	0	55	23.4	159.6	23.8	206.9	0
2009	100	199	Williamson	1	Southern	Mostly Urban	34.8	80227	145	251	285	237	873	100	180.7	312.9	355.2	295.4	1088.2	124.6
2009	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	365518	1499	1535	1861	1163	4579	20	410.1	420	509.1	318.2	1252.7	5.5
2009	102	203	Woodford	11	Central	Mostly Rural	54.9	48197	862	44	143	98	322	37	1788.5	91.3	296.7	203.3	668.1	76.8
2010	1	1	Adams	8	Central	Mostly Urban	32.6	81693	123	68	508	81	660	3	150.6	83.2	621.8	99.2	807.9	3.7
2010	2	3	Alexander	1	Southern	Mostly Rural	61.9	9990	118	13	95	37	172	27	1181.2	130.1	951	370.4	1721.7	270.3
2010	3	5	Bond	3	Southern	Mostly Rural	60.7	21212	254	29	114	81	245	21	1197.4	136.7	537.4	381.9	1155	99
2010	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	68705	1024	20	159	66	252	7	1490.4	29.1	231.4	96.1	366.8	10.2
2010	5	9	Brown	8	Central	Mostly Urban	41.1	7937	4	38	21	53	122	10	50.4	478.8	264.6	667.8	1537.1	126
2010	6	11	Bureau	13	Central	Mostly Rural	57.4	42608	33	6	67	27	100	0	77.5	14.1	157.2	63.4	234.7	0
2010	7	13	Calhoun	8	Southern	Completely Rural	100	6121	9	15	31	15	63	2	147	245.1	506.5	245.1	1029.2	32.7
2010	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	18350	158	13	68	20	101	0	861	70.8	370.6	109	550.4	0
2010	9	17	Cass	8	Central	Mostly Rural	52.1	16820	16	30	109	15	156	2	95.1	178.4	648	89.2	927.5	11.9
2010	10	19	Champaign	6	Central	Mostly Urban	12.7	238434	461	132	1168	378	1693	15	193.3	55.4	489.9	158.5	710	6.3
2010	11	21	Christian	4	Central	Mostly Urban	43.5	42000	163	102	138	228	489	21	388.1	242.9	328.6	542.9	1164.3	50
2010	12	23	Clark	5	Southern	Mostly Rural	59.5	19767	0	8	82	23	113	0	0	40.5	414.8	116.4	571.7	0
2010	13	25	Clay	4	Southern	Mostly Rural	64.7	16794	97	70	79	67	226	10	577.6	416.8	470.4	399	1345.7	59.5
2010	14	27	Clinton	4	Southern	Mostly Urban	48.8	45870	223	55	84	83	222	0	486.2	119.9	183.1	180.9	484	0
2010	15	29	Coles	5	Central	Mostly Urban	24.3	63205	568	75	378	179	661	29	898.7	118.7	598.1	283.2	1045.8	45.9
2010	16	31	Cook	co	Northern - Cook	Completely Urban	0	6355854	6092	7920	18312	7267	34126	627	95.8	124.6	288.1	114.3	536.9	9.9
2010	17	33	Crawford	2	Southern	Mostly Rural	60.2	23592	221	16	86	69	172	1	936.8	67.8	364.5	292.5	729.1	4.2
2010	18	35	Cumberland	5	Southern	Completely Rural	100	13500	25	9	30	14	60	7	185.2	66.7	222.2	103.7	444.4	51.9
2010	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	127347	262	30	317	144	492	1	205.7	23.6	248.9	113.1	386.3	0.8
2010	20	39	De Witt	6	Central	Mostly Urban	48.8	20153	203	49	84	49	199	17	1007.3	243.1	416.8	243.1	987.4	84.4
2010	21	41	Douglas	6	Central	Mostly Rural	61.6	24848	207	63	78	47	200	12	833.1	253.5	313.9	189.2	804.9	48.3
2010	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1131004	2252	614	1923	1177	3731	17	199.1	54.3	170	104.1	329.9	1.5
2010	23	45	Edgar	5	Central	Mostly Rural	51.8	22355	87	7	124	65	197	1	389.2	31.3	554.7	290.8	881.2	4.5
2010	24	47	Edwards	2	Southern	Completely Rural	100	8182	13	6	25	8	40	1	158.9	73.3	305.5	97.8	488.9	12.2
2010	25	49	Effingham	4	Southern	Mostly Rural	59.7	42106	775	76	142	161	398	19	1840.6	180.5	337.2	382.4	945.2	45.1
2010	26	51	Fayette	4	Southern	Mostly Rural	67	26800	443	48	136	138	323	1	1653	179.1	507.5	514.9	1205.2	3.7
2010	27	53	Ford	11	Central	Mostly Urban	41.8	17207	104	39	58	53	151	1	604.4	226.7	337.1	308	877.5	5.8
2010	28	55	Franklin	2	Southern	Mostly Urban	48.6	48585	85	21	239	111	379	8	175	43.2	491.9	228.5	780.1	16.5
2010	29	57	Fulton	9	Central	Mostly Rural	60	44318	63	24	150	90	267	3	142.2	54.2	338.5	203.1	602.5	6.8
2010	30	59	Gallatin	2	Southern	Completely Rural	100	6687	28	6	51	27	84	0	418.7	89.7	762.7	403.8	1256.2	0
2010	31	61	Greene	7	Central	Mostly Rural	70.8	16877	174	9	114	239	367	5	1031	53.3	675.5	1416.1	2174.6	29.6
2010	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63055	118	3	189	31	228	5	187.1	4.8	299.7	49.2	361.6	7.9
2010	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10264	21	3	38	18	60	1	204.6	29.2	370.2	175.4	584.6	9.7
2010	34	67	Hancock	9	Central	Mostly Rural	71	23010	22	2	46	2	50	0	95.6	8.7	199.9	8.7	217.3	0
2010	35	69	Hardin	2	Southern	Completely Rural	100	5144	17	9	33	42	84	0	330.5	175	641.5	816.5	1633	0
2010	36	71	Henderson	9	Central	Mostly Rural	99.7	8742	29	2	23	9	34	0	331.7	22.9	263.1	103	388.9	0
2010	37	73	Henry	14	Central	Mostly Rural	50.3	61659	590	20	181	63	264	0	956.9	32.4	293.6	102.2	428.2	0
2010	38	75	Iroquois	21	Central	Mostly Rural	71.7	36217	126	16	179	42	238	1	347.9	44.2	494.2	116	657.1	2.8
2010	39	77	Jackson	1	Southern	Mostly Urban	37.2	70539	167	227	333	155	854	139	236.7	321.8	472.1	219.7	1210.7	197.1
2010	40	79	Jasper	4	Southern	Mostly Rural	69.9	11799	37	41	35	47	123	0	313.6	347.5	296.6	398.3	1042.5	0
2010	41	81	Jefferson	2	Southern	Mostly Rural	58.8	46804	63	38	187	50	277	2	134.6	81.2	399.5	106.8	591.8	4.3
2010	42	83	Jersey	7	Southern	Mostly Rural	60.6	27888	42	7	86	14	107	0	150.6	25.1	308.4	50.2	383.7	0
2010	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27045	130	46	56	29	144	13	480.7	170.1	207.1	107.2	532.4	48.1
2010	44	87	Johnson	1	Southern	Completely Rural	100	14858	48	4	60	24	99	11	323.1	26.9	403.8	161.5	666.3	74
2010	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	656860	1552	247	2025	492	2781	17	236.3	37.6	308.3	74.9	423.4	2.6
2010	46	91	Kankakee	21	Central	Mostly Urban	24.5	140392	149	0	513	206	719	0	106.1	0	365.4	146.7	512.1	0
2010	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	149885	1000	45	316	307	678	10	667.2	30	210.8	204.8	452.3	6.7
2010	48	95	Knox	9	Central	Mostly Urban	24.3	63138	129	44	239	56	340	1	204.3	69.7	378.5	88.7	538.5	1.6
2010	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	884482	188	543	2449	641	3854	221	21.3	61.4	276.9	72.5	435.7	25
2010	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	138384	236	13	555	71	648	9	170.5	9.4	401.1	51.3	468.3	6.5
2010	51	101	Lawrence	2	Southern	Mostly Rural	58	19973	154	1	100	66	167	0	771	5	500.7	330.4	836.1	0
2010	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43121	477	44	183	55	291	9	1106.2	102	424.4	127.5	674.8	20.9
2010	53	105	Livingston	11	Central	Mostly Urban	40.8	47019	405	49	183	102	336	2	861.4	104.2	389.2	216.9	714.6	4.3
2010	54	107	Logan	11	Central	Mostly Urban	39.9	35931	575	43	171	95	345	36	1600.3	119.7	475.9	264.4	960.2	100.2
2010	55	109	McDonough	9	Central	Mostly Urban	29.5	37574	123	6	98	6	111	1	327.4	16	260.8	16	295.4	2.7
2010	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	387859	167	67	573	187	866	39	43.1	17.3	147.7	48.2	223.3	10.1
2010	57	113	McLean	11	Central	Mostly Urban	16.5	206094	309	19	809	117	966	21	149.9	9.2	392.5	56.8	468.7	10.2
2010	58	115	Macon	6	Central	Mostly Urban	15.3	134563	280	375	1103	339	1817	0	208.1	278.7	819.7	251.9	1350.3	0
2010	59	117	Macoupin	7	Central	Mostly Rural	58.5	57929	118	144	207	70	425	4	203.7	248.6	357.3	120.8	733.7	6.9
2010	60	119	Madison	3	Southern	Mostly Urban	13.3	326896	868	311	1367	219	1897	0	265.5	95.1	418.2	67	580.3	0
2010	61	121	Marion	4	Southern	Mostly Urban	45.1	48022	76	362	388	258	1063	55	158.3	753.8	808	537.3	2213.6	114.5
2010	62	123	Marshall	10	Central	Completely Rural	100	15184	180	14	40	79	142	9	1185.5	92.2	263.4	520.3	935.2	59.3
2010	63	125	Mason	8	Central	Mostly Rural	77.5	17699	32	35	67	39	145	4	180.8	197.8	378.6	220.4	819.3	22.6
2010	64	127	Massac	1	Southern	Mostly Rural	50.5	18681	378	29	101	74	231	27	2023.4	155.2	540.7	396.1	1236.6	144.5
2010	65	129	Menard	8	Central	Mostly Rural	75.7	15494	109	16	29	37	82	0	703.5	103.3	187.2	238.8	529.2	0
2010	66	131	Mercer	14	Central	Mostly Rural	77.8	19912	41	3	57	31	91	0	205.9	15.1	286.3	155.7	457	0
2010	67	133	Monroe	20	Southern	Mostly Urban	41.4	40647	338	0	84	3	87	0	831.5	0	206.7	7.4	214	0
2010	68	135	Montgomery	4	Central	Mostly Urban	41.6	36057	409	139	120	153	412	0	1134.3	385.5	332.8	424.3	1142.6	0
2010	69	137	Morgan	7	Central	Mostly Urban	36.2	42557	247	114	160	200	490	16	580.4	267.9	376	470	1151.4	37.6
2010	70	139	Moultrie	6	Central	Mostly Rural	69.2	18369	47	33	50	27	128	18	255.9	179.7	272.2	147	696.8	98
2010	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	65746	528	22	160	106	300	12	803.1	33.5	243.4	161.2	456.3	18.3
2010	72	143	Peoria	10	Central	Mostly Urban	14.6	228441	3376	5	1106	251	1458	96	1477.8	2.2	484.2	109.9	638.2	42
2010	73	145	Perry	20	Southern	Mostly Urban	43.6	26650	155	7	81	20	115	7	581.6	26.3	303.9	75	431.5	26.3
2010	74	147	Piatt	6	Central	Mostly Rural	67.7	20444	56	75	69	119	294	31	273.9	366.9	337.5	582.1	1438.1	151.6
2010	75	149	Pike	8	Central	Mostly Rural	72.3	19864	160	85	114	122	327	6	805.5	427.9	573.9	614.2	1646.2	30.2
2010	76	151	Pope	1	Southern	Completely Rural	100	5208	25	6	16	18	48	8	480	115.2	307.2	345.6	921.7	153.6
2010	77	153	Pulaski	1	Southern	Completely Rural	100	7445	240	11	60	23	98	4	3223.6	147.8	805.9	308.9	1316.3	53.7
2010	78	155	Putnam	10	Central	Completely Rural	100	7208	78	8	30	14	53	1	1082.1	111	416.2	194.2	735.3	13.9
2010	79	157	Randolph	20	Southern	Mostly Urban	42.6	39621	147	0	114	6	121	1	371	0	287.7	15.1	305.4	2.5
2010	80	159	Richland	2	Southern	Mostly Urban	43.5	19574	38	17	61	29	110	3	194.1	86.8	311.6	148.2	562	15.3
2010	81	161	Rock Island	14	Central	Mostly Urban	10.9	178889	220	1636	796	234	2698	32	123	914.5	445	130.8	1508.2	17.9
2010	82	163	St. Clair	20	Southern	Mostly Urban	9.8	334670	795	36	1224	90	1354	4	237.5	10.8	365.7	26.9	404.6	1.2
2010	83	165	Saline	1	Southern	Mostly Urban	43.7	30175	54	154	273	199	631	5	179	510.4	904.7	659.5	2091.1	16.6
2010	84	167	Sangamon	7	Central	Mostly Urban	14.1	241794	1527	35	595	346	977	1	631.5	14.5	246.1	143.1	404.1	0.4
2010	85	169	Schuyler	8	Central	Mostly Rural	57.6	9022	8	37	39	57	135	2	88.7	410.1	432.3	631.8	1496.3	22.2
2010	86	171	Scott	7	Central	Completely Rural	100	6506												
2010	87	173	Shelby	4	Central	Mostly Rural	77.7	27097	292	51	60	102	213	0	1077.6	188.2	221.4	376.4	786.1	0
2010	88	175	Stark	10	Central	Completely Rural	100	7274	16	11	26	26	67	4	220	151.2	357.4	357.4	921.1	55
2010	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	57697	1713	26	381	184	593	2	2969	45.1	660.3	318.9	1027.8	3.5
2010	90	179	Tazewell	10	Central	Mostly Urban	20.4	165491	1703	121	540	257	954	36	1029.1	73.1	326.3	155.3	576.5	21.8
2010	91	181	Union	1	Southern	Mostly Rural	65.9	21276	31	58	84	51	218	25	145.7	272.6	394.8	239.7	1024.6	117.5
2010	92	183	Vermilion	5	Central	Mostly Urban	31.3	100374	916	137	417	275	944	115	912.6	136.5	415.4	274	940.5	114.6
2010	93	185	Wabash	2	Southern	Mostly Urban	38.9	14359	80	20	87	65	173	1	557.1	139.3	605.9	452.7	1204.8	7
2010	94	187	Warren	9	Central	Mostly Urban	45.5	21386	41	3	52	21	76	0	191.7	14	243.1	98.2	355.4	0
2010	95	189	Washington	20	Southern	Mostly Rural	73.6	17717	100	3	23	10	36	0	564.4	16.9	129.8	56.4	203.2	0
2010	96	191	Wayne	2	Southern	Mostly Rural	69.9	20315	98	26	70	38	138	4	482.4	128	344.6	187.1	679.3	19.7
2010	97	193	White	2	Southern	Mostly Rural	62	17463	44	11	86	49	151	5	252	63	492.5	280.6	864.7	28.6
2010	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	71363	412	213	414	184	826	15	577.3	298.5	580.1	257.8	1157.5	21
2010	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	863735	544	211	1593	220	2024	0	63	24.4	184.4	25.5	234.3	0
2010	100	199	Williamson	1	Southern	Mostly Urban	34.8	80293	137	264	280	196	846	106	170.6	328.8	348.7	244.1	1053.6	132
2010	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	364044	1372	1406	1870	1082	4381	23	376.9	386.2	513.7	297.2	1203.4	6.3
2010	102	203	Woodford	11	Central	Mostly Rural	54.9	47984	865	59	141	80	299	19	1802.7	123	293.8	166.7	623.1	39.6
2011	1	1	Adams	8	Central	Mostly Urban	32.6	82561	118	234	560	46	842	2	142.9	283.4	678.3	55.7	1019.9	2.4
2011	2	3	Alexander	1	Southern	Mostly Rural	61.9	9807	98	7	85	19	131	20	999.3	71.4	866.7	193.7	1335.8	203.9
2011	3	5	Bond	3	Southern	Mostly Rural	60.7	21331	199	19	108	77	220	16	932.9	89.1	506.3	361	1031.4	75
2011	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	69347	890	22	166	68	257	1	1283.4	31.7	239.4	98.1	370.6	1.4
2011	5	9	Brown	8	Central	Mostly Urban	41.1	7923	6	34	14	43	92	1	75.7	429.1	176.7	542.7	1161.2	12.6
2011	6	11	Bureau	13	Central	Mostly Rural	57.4	42518	33	4	90	29	123	0	77.6	9.4	211.7	68.2	289.3	0
2011	7	13	Calhoun	8	Southern	Completely Rural	100	6122	15	8	27	13	49	1	245	130.7	441	212.3	800.4	16.3
2011	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	18323	178	12	57	25	94	0	971.5	65.5	311.1	136.4	513	0
2011	9	17	Cass	8	Central	Mostly Rural	52.1	17012	25	29	106	13	154	6	147	170.5	623.1	76.4	905.2	35.3
2011	10	19	Champaign	6	Central	Mostly Urban	12.7	242502	465	153	1061	360	1593	19	191.8	63.1	437.5	148.5	656.9	7.8
2011	11	21	Christian	4	Central	Mostly Urban	43.5	42338	97	139	151	245	558	23	229.1	328.3	356.7	578.7	1318	54.3
2011	12	23	Clark	5	Southern	Mostly Rural	59.5	19903	74	7	82	22	111	0	371.8	35.2	412	110.5	557.7	0
2011	13	25	Clay	4	Southern	Mostly Rural	64.7	16817	94	62	91	65	220	2	559	368.7	541.1	386.5	1308.2	11.9
2011	14	27	Clinton	4	Southern	Mostly Urban	48.8	46544	230	53	85	63	206	5	494.2	113.9	182.6	135.4	442.6	10.7
2011	15	29	Coles	5	Central	Mostly Urban	24.3	63423	591	58	387	168	624	11	931.8	91.4	610.2	264.9	983.9	17.3
2011	16	31	Cook	co	Northern - Cook	Completely Urban	0	6440851	5548	4991	18330	6108	30118	689	86.1	77.5	284.6	94.8	467.6	10.7
2011	17	33	Crawford	2	Southern	Mostly Rural	60.2	23816	198	12	79	51	145	3	831.4	50.4	331.7	214.1	608.8	12.6
2011	18	35	Cumberland	5	Southern	Completely Rural	100	13690	10	6	29	15	57	7	73	43.8	211.8	109.6	416.4	51.1
2011	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	127731	752	16	319	131	468	2	588.7	12.5	249.7	102.6	366.4	1.6
2011	20	39	De Witt	6	Central	Mostly Urban	48.8	20268	163	61	83	51	223	28	804.2	301	409.5	251.6	1100.3	138.1
2011	21	41	Douglas	6	Central	Mostly Rural	61.6	24941	135	61	73	59	205	12	541.3	244.6	292.7	236.6	821.9	48.1
2011	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1150393	2130	522	1926	1107	3572	17	185.2	45.4	167.4	96.2	310.5	1.5
2011	23	45	Edgar	5	Central	Mostly Rural	51.8	22426	72	8	142	60	211	1	321.1	35.7	633.2	267.5	940.9	4.5
2011	24	47	Edwards	2	Southern	Completely Rural	100	8181	33	2	29	19	50	0	403.4	24.4	354.5	232.2	611.2	0
2011	25	49	Effingham	4	Southern	Mostly Rural	59.7	42602	670	62	148	153	375	12	1572.7	145.5	347.4	359.1	880.2	28.2
2011	26	51	Fayette	4	Southern	Mostly Rural	67	27308	438	67	127	126	323	3	1603.9	245.3	465.1	461.4	1182.8	11
2011	27	53	Ford	11	Central	Mostly Urban	41.8	17099	106	23	50	61	135	1	619.9	134.5	292.4	356.7	789.5	5.8
2011	28	55	Franklin	2	Southern	Mostly Urban	48.6	49125	103	17	234	98	353	4	209.7	34.6	476.3	199.5	718.6	8.1
2011	29	57	Fulton	9	Central	Mostly Rural	60	44541	70	13	147	64	231	7	157.2	29.2	330	143.7	518.6	15.7
2011	30	59	Gallatin	2	Southern	Completely Rural	100	6626	19	2	41	30	73	0	286.7	30.2	618.8	452.8	1101.7	0
2011	31	61	Greene	7	Central	Mostly Rural	70.8	16994	300	25	132	104	264	3	1765.3	147.1	776.7	612	1553.5	17.7
2011	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63537	100	3	199	29	234	3	157.4	4.7	313.2	45.6	368.3	4.7
2011	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10331	27	3	44	10	58	1	261.3	29	425.9	96.8	561.4	9.7
2011	34	67	Hancock	9	Central	Mostly Rural	71	23115	25	1	47	2	50	0	108.2	4.3	203.3	8.7	216.3	0
2011	35	69	Hardin	2	Southern	Completely Rural	100	5167	17	3	25	34	62	0	329	58.1	483.8	658	1199.9	0
2011	36	71	Henderson	9	Central	Mostly Rural	99.7	8665	24	2	19	2	23	0	277	23.1	219.3	23.1	265.4	0
2011	37	73	Henry	14	Central	Mostly Rural	50.3	62148	540	23	166	55	245	1	868.9	37	267.1	88.5	394.2	1.6
2011	38	75	Iroquois	21	Central	Mostly Rural	71.7	36353	111	14	160	26	200	0	305.3	38.5	440.1	71.5	550.2	0
2011	39	77	Jackson	1	Southern	Mostly Urban	37.2	71068	153	160	300	197	762	105	215.3	225.1	422.1	277.2	1072.2	147.7
2011	40	79	Jasper	4	Southern	Mostly Rural	69.9	11988	38	47	51	58	156	0	317	392.1	425.4	483.8	1301.3	0
2011	41	81	Jefferson	2	Southern	Mostly Rural	58.8	47253	58	49	197	50	305	9	122.7	103.7	416.9	105.8	645.5	19
2011	42	83	Jersey	7	Southern	Mostly Rural	60.6	28004	36	6	100	17	124	1	128.6	21.4	357.1	60.7	442.8	3.6
2011	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27278	109	35	36	21	102	10	399.6	128.3	132	77	373.9	36.7
2011	44	87	Johnson	1	Southern	Completely Rural	100	15231	47	8	54	26	94	6	308.6	52.5	354.5	170.7	617.2	39.4
2011	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	666872	1374	209	1951	470	2660	30	206	31.3	292.6	70.5	398.9	4.5
2011	46	91	Kankakee	21	Central	Mostly Urban	24.5	141852	161	1	522	205	728	0	113.5	0.7	368	144.5	513.2	0
2011	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	153005	1091	20	254	242	520	4	713	13.1	166	158.2	339.9	2.6
2011	48	95	Knox	9	Central	Mostly Urban	24.3	63422	122	25	251	44	322	2	192.4	39.4	395.8	69.4	507.7	3.2
2011	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	890095	645	599	2030	934	3811	248	72.5	67.3	228.1	104.9	428.2	27.9
2011	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	139391	213	14	530	78	636	14	152.8	10	380.2	56	456.3	10
2011	51	101	Lawrence	2	Southern	Mostly Rural	58	20129	148	8	92	65	166	1	735.3	39.7	457.1	322.9	824.7	5
2011	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	43014	379	28	150	50	249	21	881.1	65.1	348.7	116.2	578.9	48.8
2011	53	105	Livingston	11	Central	Mostly Urban	40.8	47444	375	50	191	73	317	3	790.4	105.4	402.6	153.9	668.2	6.3
2011	54	107	Logan	11	Central	Mostly Urban	39.9	36220	518	29	178	106	339	26	1430.1	80.1	491.4	292.7	935.9	71.8
2011	55	109	McDonough	9	Central	Mostly Urban	29.5	37800	147	10	86	11	108	1	388.9	26.5	227.5	29.1	285.7	2.6
2011	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	390504	230	73	577	175	854	29	58.9	18.7	147.8	44.8	218.7	7.4
2011	57	113	McLean	11	Central	Mostly Urban	16.5	209403	338	16	822	106	962	18	161.4	7.6	392.5	50.6	459.4	8.6
2011	58	115	Macon	6	Central	Mostly Urban	15.3	135850	337	306	1139	407	1853	1	248.1	225.2	838.4	299.6	1364	0.7
2011	59	117	Macoupin	7	Central	Mostly Rural	58.5	58465	102	136	248	102	496	10	174.5	232.6	424.2	174.5	848.4	17.1
2011	60	119	Madison	3	Southern	Mostly Urban	13.3	329131	814	283	1373	166	1822	0	247.3	86	417.2	50.4	553.6	0
2011	61	121	Marion	4	Southern	Mostly Urban	45.1	48194	74	309	473	297	1128	49	153.5	641.2	981.4	616.3	2340.5	101.7
2011	62	123	Marshall	10	Central	Completely Rural	100	15179	160	17	46	69	140	8	1054.1	112	303.1	454.6	922.3	52.7
2011	63	125	Mason	8	Central	Mostly Rural	77.5	17633	31	25	67	37	130	1	175.8	141.8	380	209.8	737.3	5.7
2011	64	127	Massac	1	Southern	Mostly Rural	50.5	18759	387	22	93	77	208	16	2063	117.3	495.8	410.5	1108.8	85.3
2011	65	129	Menard	8	Central	Mostly Rural	75.7	15635	102	13	24	26	66	3	652.4	83.1	153.5	166.3	422.1	19.2
2011	66	131	Mercer	14	Central	Mostly Rural	77.8	19973	37	2	77	31	110	0	185.3	10	385.5	155.2	550.7	0
2011	67	133	Monroe	20	Southern	Mostly Urban	41.4	41293	339	1	72	4	77	0	821	2.4	174.4	9.7	186.5	0
2011	68	135	Montgomery	4	Central	Mostly Urban	41.6	36104	428	131	102	117	350	0	1185.5	362.8	282.5	324.1	969.4	0
2011	69	137	Morgan	7	Central	Mostly Urban	36.2	42905	256	108	141	189	452	14	596.7	251.7	328.6	440.5	1053.5	32.6
2011	70	139	Moultrie	6	Central	Mostly Rural	69.2	18590	36	34	53	31	138	20	193.7	182.9	285.1	166.8	742.3	107.6
2011	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	65925	501	22	175	107	316	12	760	33.4	265.5	162.3	479.3	18.2
2011	72	143	Peoria	10	Central	Mostly Urban	14.6	231614	3401	0	965	259	1302	78	1468.4	0	416.6	111.8	562.1	33.7
2011	73	145	Perry	20	Southern	Mostly Urban	43.6	26813	197	5	64	23	93	1	734.7	18.6	238.7	85.8	346.8	3.7
2011	74	147	Piatt	6	Central	Mostly Rural	67.7	20593	52	59	57	98	233	19	252.5	286.5	276.8	475.9	1131.5	92.3
2011	75	149	Pike	8	Central	Mostly Rural	72.3	20042	147	65	132	109	315	9	733.5	324.3	658.6	543.9	1571.7	44.9
2011	76	151	Pope	1	Southern	Completely Rural	100	5274	26	3	20	11	35	1	493	56.9	379.2	208.6	663.6	19
2011	77	153	Pulaski	1	Southern	Completely Rural	100	7349	234	8	63	20	94	3	3184.1	108.9	857.3	272.1	1279.1	40.8
2011	78	155	Putnam	10	Central	Completely Rural	100	7222	145	5	25	22	53	1	2007.8	69.2	346.2	304.6	733.9	13.8
2011	79	157	Randolph	20	Southern	Mostly Urban	42.6	39921	116	1	106	13	122	2	290.6	2.5	265.5	32.6	305.6	5
2011	80	159	Richland	2	Southern	Mostly Urban	43.5	19795	19	10	102	29	144	3	96	50.5	515.3	146.5	727.5	15.2
2011	81	161	Rock Island	14	Central	Mostly Urban	10.9	180616	239	1556	806	249	2647	36	132.3	861.5	446.3	137.9	1465.5	19.9
2011	82	163	St. Clair	20	Southern	Mostly Urban	9.8	337592	725	42	1316	100	1462	4	214.8	12.4	389.8	29.6	433.1	1.2
2011	83	165	Saline	1	Southern	Mostly Urban	43.7	30515	61	101	269	99	471	2	199.9	331	881.5	324.4	1543.5	6.6
2011	84	167	Sangamon	7	Central	Mostly Urban	14.1	245821	1620	23	599	380	1003	1	659	9.4	243.7	154.6	408	0.4
2011	85	169	Schuyler	8	Central	Mostly Rural	57.6	9011	8	33	46	50	130	1	88.8	366.2	510.5	554.9	1442.7	11.1
2011	86	171	Scott	7	Central	Completely Rural	100	6428												
2011	87	173	Shelby	4	Central	Mostly Rural	77.7	27211	268	46	76	84	206	0	984.9	169	279.3	308.7	757	0
2011	88	175	Stark	10	Central	Completely Rural	100	7167	43	5	30	21	57	1	600	69.8	418.6	293	795.3	14
2011	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	57900	1576	36	396	163	597	2	2721.9	62.2	683.9	281.5	1031.1	3.5
2011	90	179	Tazewell	10	Central	Mostly Urban	20.4	167576	1590	118	531	232	906	25	948.8	70.4	316.9	138.4	540.7	14.9
2011	91	181	Union	1	Southern	Mostly Rural	65.9	21436	21	50	76	59	206	21	98	233.3	354.5	275.2	961	98
2011	92	183	Vermilion	5	Central	Mostly Urban	31.3	101321	265	77	397	228	742	40	261.5	76	391.8	225	732.3	39.5
2011	93	185	Wabash	2	Southern	Mostly Urban	38.9	14391	72	21	102	57	181	1	500.3	145.9	708.8	396.1	1257.7	6.9
2011	94	187	Warren	9	Central	Mostly Urban	45.5	21753	45	6	54	18	78	0	206.9	27.6	248.2	82.7	358.6	0
2011	95	189	Washington	20	Southern	Mostly Rural	73.6	17696	84	0	21	11	33	1	474.7	0	118.7	62.2	186.5	5.7
2011	96	191	Wayne	2	Southern	Mostly Rural	69.9	20441	78	24	68	44	140	4	381.6	117.4	332.7	215.3	684.9	19.6
2011	97	193	White	2	Southern	Mostly Rural	62	17691	46	10	87	34	138	7	260	56.5	491.8	192.2	780.1	39.6
2011	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	71841	430	233	398	188	849	30	598.5	324.3	554	261.7	1181.8	41.8
2011	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	873503	540	217	1642	196	2055	0	61.8	24.8	188	22.4	235.3	0
2011	100	199	Williamson	1	Southern	Mostly Urban	34.8	81425	134	249	290	187	820	94	164.6	305.8	356.2	229.7	1007.1	115.4
2011	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	365842	1437	1216	2154	767	4151	14	392.8	332.4	588.8	209.7	1134.6	3.8
2011	102	203	Woodford	11	Central	Mostly Rural	54.9	48679	876	54	160	92	334	28	1799.5	110.9	328.7	189	686.1	57.5
2012	1	1	Adams	8	Central	Mostly Urban	32.6	82448	116	167	511	60	739	1	140.7	202.6	619.8	72.8	896.3	1.2
2012	2	3	Alexander	1	Southern	Mostly Rural	61.9	9451	101	8	85	20	135	22	1068.7	84.6	899.4	211.6	1428.4	232.8
2012	3	5	Bond	3	Southern	Mostly Rural	60.7	21068	163	23	101	70	209	15	773.7	109.2	479.4	332.3	992	71.2
2012	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	68451	878	42	152	96	291	1	1282.7	61.4	222.1	140.2	425.1	1.5
2012	5	9	Brown	8	Central	Mostly Urban	41.1	7948	10	35	21	64	129	9	125.8	440.4	264.2	805.2	1623	113.2
2012	6	11	Bureau	13	Central	Mostly Rural	57.4	42082	35	1	99	36	137	1	83.2	2.4	235.3	85.5	325.6	2.4
2012	7	13	Calhoun	8	Southern	Completely Rural	100	6037	11	8	29	16	57	4	182.2	132.5	480.4	265	944.2	66.3
2012	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	18163	196	12	58	29	99	0	1079.1	66.1	319.3	159.7	545.1	0
2012	9	17	Cass	8	Central	Mostly Rural	52.1	16748	54	30	109	24	166	3	322.4	179.1	650.8	143.3	991.2	17.9
2012	10	19	Champaign	6	Central	Mostly Urban	12.7	243966	509	180	1045	311	1564	28	208.6	73.8	428.3	127.5	641.1	11.5
2012	11	21	Christian	4	Central	Mostly Urban	43.5	42080	82	135	158	250	566	23	194.9	320.8	375.5	594.1	1345.1	54.7
2012	12	23	Clark	5	Southern	Mostly Rural	59.5	19996	59	7	88	16	113	2	295.1	35	440.1	80	565.1	10
2012	13	25	Clay	4	Southern	Mostly Rural	64.7	16819	109	62	106	69	242	5	648.1	368.6	630.2	410.3	1438.8	29.7
2012	14	27	Clinton	4	Southern	Mostly Urban	48.8	46247	196	52	91	56	201	2	423.8	112.4	196.8	121.1	434.6	4.3
2012	15	29	Coles	5	Central	Mostly Urban	24.3	62947	599	50	475	92	623	6	951.6	79.4	754.6	146.2	989.7	9.5
2012	16	31	Cook	co	Northern - Cook	Completely Urban	0	6451108	5185	5111	17752	6539	30174	772	80.4	79.2	275.2	101.4	467.7	12
2012	17	33	Crawford	2	Southern	Mostly Rural	60.2	23552	225	10	78	40	129	1	955.3	42.5	331.2	169.8	547.7	4.2
2012	18	35	Cumberland	5	Southern	Completely Rural	100	13500	53	12	56	17	93	8	392.6	88.9	414.8	125.9	688.9	59.3
2012	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	127530	899	10	341	137	492	4	704.9	7.8	267.4	107.4	385.8	3.1
2012	20	39	De Witt	6	Central	Mostly Urban	48.8	20153	134	55	82	54	218	27	664.9	272.9	406.9	268	1081.7	134
2012	21	41	Douglas	6	Central	Mostly Rural	61.6	24956	120	70	68	76	225	11	480.8	280.5	272.5	304.5	901.6	44.1
2012	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1152237	1978	443	1830	1019	3304	12	171.7	38.4	158.8	88.4	286.7	1
2012	23	45	Edgar	5	Central	Mostly Rural	51.8	22091	85	12	143	59	218	4	384.8	54.3	647.3	267.1	986.8	18.1
2012	24	47	Edwards	2	Southern	Completely Rural	100	8276	60	4	41	31	76	0	725	48.3	495.4	374.6	918.3	0
2012	25	49	Effingham	4	Southern	Mostly Rural	59.7	42594	627	65	140	166	380	9	1472	152.6	328.7	389.7	892.1	21.1
2012	26	51	Fayette	4	Southern	Mostly Rural	67	27053	503	69	155	91	318	3	1859.3	255.1	572.9	336.4	1175.5	11.1
2012	27	53	Ford	11	Central	Mostly Urban	41.8	17139	100	32	69	57	158	0	583.5	186.7	402.6	332.6	921.9	0
2012	28	55	Franklin	2	Southern	Mostly Urban	48.6	48919	99	26	296	120	445	3	202.4	53.1	605.1	245.3	909.7	6.1
2012	29	57	Fulton	9	Central	Mostly Rural	60	44152	67	17	146	51	217	3	151.7	38.5	330.7	115.5	491.5	6.8
2012	30	59	Gallatin	2	Southern	Completely Rural	100	6492	18	1	40	28	69	0	277.3	15.4	616.1	431.3	1062.8	0
2012	31	61	Greene	7	Central	Mostly Rural	70.8	16717	0	71	66	76	213	0	0	424.7	394.8	454.6	1274.2	0
2012	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63540	100	5	195	34	237	3	157.4	7.9	306.9	53.5	373	4.7
2012	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10292	21	3	26	9	39	1	204	29.1	252.6	87.4	378.9	9.7
2012	34	67	Hancock	9	Central	Mostly Rural	71	22878	27	1	54	4	60	1	118	4.4	236	17.5	262.3	4.4
2012	35	69	Hardin	2	Southern	Completely Rural	100	5144	14	2	19	40	61	0	272.2	38.9	369.4	777.6	1185.8	0
2012	36	71	Henderson	9	Central	Mostly Rural	99.7	8434	18	2	15	2	19	0	213.4	23.7	177.9	23.7	225.3	0
2012	37	73	Henry	14	Central	Mostly Rural	50.3	61978	608	8	159	43	212	2	981	12.9	256.5	69.4	342.1	3.2
2012	38	75	Iroquois	21	Central	Mostly Rural	71.7	35943	84	10	181	30	222	1	233.7	27.8	503.6	83.5	617.6	2.8
2012	39	77	Jackson	1	Southern	Mostly Urban	37.2	69761	187	226	394	265	980	95	268.1	324	564.8	379.9	1404.8	136.2
2012	40	79	Jasper	4	Southern	Mostly Rural	69.9	11887	35	43	53	48	145	1	294.4	361.7	445.9	403.8	1219.8	8.4
2012	41	81	Jefferson	2	Southern	Mostly Rural	58.8	47133	59	36	251	56	366	23	125.2	76.4	532.5	118.8	776.5	48.8
2012	42	83	Jersey	7	Southern	Mostly Rural	60.6	27750	37	5	99	14	118	0	133.3	18	356.8	50.5	425.2	0
2012	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	27087	113	44	49	24	121	4	417.2	162.4	180.9	88.6	446.7	14.8
2012	44	87	Johnson	1	Southern	Completely Rural	100	15230	35	7	42	22	72	1	229.8	46	275.8	144.5	472.8	6.6
2012	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	666815	1294	212	1875	445	2555	23	194.1	31.8	281.2	66.7	383.2	3.4
2012	46	91	Kankakee	21	Central	Mostly Urban	24.5	140803	161	3	512	178	693	0	114.3	2.1	363.6	126.4	492.2	0
2012	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	154475	1079	8	254	235	497	0	698.5	5.2	164.4	152.1	321.7	0
2012	48	95	Knox	9	Central	Mostly Urban	24.3	62839	121	21	230	49	305	5	192.6	33.4	366	78	485.4	8
2012	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	886764	687	541	1814	958	3547	234	77.5	61	204.6	108	400	26.4
2012	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	138390	215	17	516	67	607	7	155.4	12.3	372.9	48.4	438.6	5.1
2012	51	101	Lawrence	2	Southern	Mostly Rural	58	19945	134	5	84	63	152	0	671.8	25.1	421.2	315.9	762.1	0
2012	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	42514	301	18	165	53	264	28	708	42.3	388.1	124.7	621	65.9
2012	53	105	Livingston	11	Central	Mostly Urban	40.8	47024	359	43	196	44	283	0	763.4	91.4	416.8	93.6	601.8	0
2012	54	107	Logan	11	Central	Mostly Urban	39.9	36197	944	25	177	103	317	12	2608	69.1	489	284.6	875.8	33.2
2012	55	109	McDonough	9	Central	Mostly Urban	29.5	37854	157	3	72	9	85	1	414.8	7.9	190.2	23.8	224.5	2.6
2012	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	388445	232	40	619	168	853	26	59.7	10.3	159.4	43.2	219.6	6.7
2012	57	113	McLean	11	Central	Mostly Urban	16.5	211230	347	46	949	79	1082	8	164.3	21.8	449.3	37.4	512.2	3.8
2012	58	115	Macon	6	Central	Mostly Urban	15.3	134904	317	262	1171	425	1858	0	235	194.2	868	315	1377.3	0
2012	59	117	Macoupin	7	Central	Mostly Rural	58.5	57511	121	158	234	98	497	7	210.4	274.7	406.9	170.4	864.2	12.2
2012	60	119	Madison	3	Southern	Mostly Urban	13.3	328067	802	295	1402	140	1837	0	244.5	89.9	427.4	42.7	559.9	0
2012	61	121	Marion	4	Southern	Mostly Urban	45.1	48016	74	276	510	298	1130	46	154.1	574.8	1062.1	620.6	2353.4	95.8
2012	62	123	Marshall	10	Central	Completely Rural	100	14830	172	15	48	41	114	10	1159.8	101.1	323.7	276.5	768.7	67.4
2012	63	125	Mason	8	Central	Mostly Rural	77.5	17424	31	38	61	30	129	0	177.9	218.1	350.1	172.2	740.4	0
2012	64	127	Massac	1	Southern	Mostly Rural	50.5	18434	447	26	117	70	230	17	2424.9	141	634.7	379.7	1247.7	92.2
2012	65	129	Menard	8	Central	Mostly Rural	75.7	15621	80	19	30	23	77	5	512.1	121.6	192	147.2	492.9	32
2012	66	131	Mercer	14	Central	Mostly Rural	77.8	19767	38	1	72	34	108	1	192.2	5.1	364.2	172	546.4	5.1
2012	67	133	Monroe	20	Southern	Mostly Urban	41.4	41214	332	0	80	1	81	0	805.6	0	194.1	2.4	196.5	0
2012	68	135	Montgomery	4	Central	Mostly Urban	41.6	35794	391	167	103	171	441	0	1092.4	466.6	287.8	477.7	1232.1	0
2012	69	137	Morgan	7	Central	Mostly Urban	36.2	42616	314	91	138	148	391	14	736.8	213.5	323.8	347.3	917.5	32.9
2012	70	139	Moultrie	6	Central	Mostly Rural	69.2	18639	59	32	49	33	127	13	316.5	171.7	262.9	177	681.4	69.7
2012	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	65280	517	18	160	75	264	11	792	27.6	245.1	114.9	404.4	16.9
2012	72	143	Peoria	10	Central	Mostly Urban	14.6	231974	3246	0	1085	188	1370	97	1399.3	0	467.7	81	590.6	41.8
2012	73	145	Perry	20	Southern	Mostly Urban	43.6	26286	169	3	69	16	91	3	642.9	11.4	262.5	60.9	346.2	11.4
2012	74	147	Piatt	6	Central	Mostly Rural	67.7	20285	44	55	53	122	243	13	216.9	271.1	261.3	601.4	1197.9	64.1
2012	75	149	Pike	8	Central	Mostly Rural	72.3	19861	171	66	119	89	280	6	861	332.3	599.2	448.1	1409.8	30.2
2012	76	151	Pope	1	Southern	Completely Rural	100	5186	20	1	14	19	36	2	385.7	19.3	270	366.4	694.2	38.6
2012	77	153	Pulaski	1	Southern	Completely Rural	100	7311	141	5	67	17	92	3	1928.6	68.4	916.4	232.5	1258.4	41
2012	78	155	Putnam	10	Central	Completely Rural	100	7105	152	4	32	19	58	3	2139.3	56.3	450.4	267.4	816.3	42.2
2012	79	157	Randolph	20	Southern	Mostly Urban	42.6	39397	113	1	87	12	101	1	286.8	2.5	220.8	30.5	256.4	2.5
2012	80	159	Richland	2	Southern	Mostly Urban	43.5	19751	25	9	108	35	153	1	126.6	45.6	546.8	177.2	774.6	5.1
2012	81	161	Rock Island	14	Central	Mostly Urban	10.9	180872	257	1513	785	242	2565	25	142.1	836.5	434	133.8	1418.1	13.8
2012	82	163	St. Clair	20	Southern	Mostly Urban	9.8	334813	694	27	1553	113	1698	5	207.3	8.1	463.8	33.8	507.1	1.5
2012	83	165	Saline	1	Southern	Mostly Urban	43.7	30465	67	70	253	65	392	4	219.9	229.8	830.5	213.4	1286.7	13.1
2012	84	167	Sangamon	7	Central	Mostly Urban	14.1	245782	1792	16	596	321	933	0	729.1	6.5	242.5	130.6	379.6	0
2012	85	169	Schuyler	8	Central	Mostly Rural	57.6	8981	14	38	50	59	147	0	155.9	423.1	556.7	656.9	1636.8	0
2012	86	171	Scott	7	Central	Completely Rural	100	6500												
2012	87	173	Shelby	4	Central	Mostly Rural	77.7	27094	306	47	100	81	228	0	1129.4	173.5	369.1	299	841.5	0
2012	88	175	Stark	10	Central	Completely Rural	100	7021	64	5	26	18	49	0	911.6	71.2	370.3	256.4	697.9	0
2012	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	57245	1604	56	373	186	619	4	2802	97.8	651.6	324.9	1081.3	7
2012	90	179	Tazewell	10	Central	Mostly Urban	20.4	167958	1560	94	510	225	858	29	928.8	56	303.6	134	510.8	17.3
2012	91	181	Union	1	Southern	Mostly Rural	65.9	21297	28	50	66	71	205	18	131.5	234.8	309.9	333.4	962.6	84.5
2012	92	183	Vermilion	5	Central	Mostly Urban	31.3	100426	251	56	419	221	724	28	249.9	55.8	417.2	220.1	720.9	27.9
2012	93	185	Wabash	2	Southern	Mostly Urban	38.9	14232	79	15	114	42	172	1	555.1	105.4	801	295.1	1208.5	7
2012	94	187	Warren	9	Central	Mostly Urban	45.5	21643	37	6	63	27	98	2	171	27.7	291.1	124.8	452.8	9.2
2012	95	189	Washington	20	Southern	Mostly Rural	73.6	17728	84	2	34	10	46	0	473.8	11.3	191.8	56.4	259.5	0
2012	96	191	Wayne	2	Southern	Mostly Rural	69.9	20426	60	15	57	54	130	4	293.7	73.4	279.1	264.4	636.4	19.6
2012	97	193	White	2	Southern	Mostly Rural	62	17639	34	6	77	19	108	6	192.8	34	436.5	107.7	612.3	34
2012	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	71091	424	180	402	186	787	19	596.4	253.2	565.5	261.6	1107	26.7
2012	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	871949	676	225	1641	169	2035	0	77.5	25.8	188.2	19.4	233.4	0
2012	100	199	Williamson	1	Southern	Mostly Urban	34.8	81417	112	266	294	195	907	152	137.6	326.7	361.1	239.5	1114	186.7
2012	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	363168	1446	1174	2399	723	4308	12	398.2	323.3	660.6	199.1	1186.2	3.3
2012	102	203	Woodford	11	Central	Mostly Rural	54.9	48622	831	41	166	105	328	16	1709.1	84.3	341.4	216	674.6	32.9
2013	1	1	Adams	8	Central	Mostly Urban	32.6	82192	116	165	476	80	724	3	141.1	200.7	579.1	97.3	880.9	3.6
2013	2	3	Alexander	1	Southern	Mostly Rural	61.9	8988	112	9	76	19	132	28	1246.1	100.1	845.6	211.4	1468.6	311.5
2013	3	5	Bond	3	Southern	Mostly Rural	60.7	20790	152	39	113	47	212	13	731.1	187.6	543.5	226.1	1019.7	62.5
2013	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	68110	860	41	134	102	280	3	1262.7	60.2	196.7	149.8	411.1	4.4
2013	5	9	Brown	8	Central	Mostly Urban	41.1	7923	5	22	26	39	89	2	63.1	277.7	328.2	492.2	1123.3	25.2
2013	6	11	Bureau	13	Central	Mostly Rural	57.4	41656	20	2	119	31	153	1	48	4.8	285.7	74.4	367.3	2.4
2013	7	13	Calhoun	8	Southern	Completely Rural	100	6066	12	8	27	4	41	2	197.8	131.9	445.1	65.9	675.9	33
2013	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	17930	205	13	67	35	115	0	1143.3	72.5	373.7	195.2	641.4	0
2013	9	17	Cass	8	Central	Mostly Rural	52.1	16592	75	42	87	38	172	5	452	253.1	524.3	229	1036.6	30.1
2013	10	19	Champaign	6	Central	Mostly Urban	12.7	245929	531	189	1035	235	1472	13	215.9	76.9	420.9	95.6	598.5	5.3
2013	11	21	Christian	4	Central	Mostly Urban	43.5	41494	74	124	160	162	465	19	178.3	298.8	385.6	390.4	1120.6	45.8
2013	12	23	Clark	5	Southern	Mostly Rural	59.5	19786	52	5	77	8	93	3	262.8	25.3	389.2	40.4	470	15.2
2013	13	25	Clay	4	Southern	Mostly Rural	64.7	16633	72	68	117	59	249	5	432.9	408.8	703.4	354.7	1497	30.1
2013	14	27	Clinton	4	Southern	Mostly Urban	48.8	45877	189	62	103	61	230	4	412	135.1	224.5	133	501.3	8.7
2013	15	29	Coles	5	Central	Mostly Urban	24.3	62674	582	57	414	81	559	7	928.6	90.9	660.6	129.2	891.9	11.2
2013	16	31	Cook	co	Northern - Cook	Completely Urban	0	6452276	5461	5122	19044	6541	31016	309	84.6	79.4	295.2	101.4	480.7	4.8
2013	17	33	Crawford	2	Southern	Mostly Rural	60.2	23350	187	8	91	35	137	3	800.9	34.3	389.7	149.9	586.7	12.8
2013	18	35	Cumberland	5	Southern	Completely Rural	100	13430	66	13	58	14	90	5	491.4	96.8	431.9	104.2	670.1	37.2
2013	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	127131	880	2	331	135	470	2	692.2	1.6	260.4	106.2	369.7	1.6
2013	20	39	De Witt	6	Central	Mostly Urban	48.8	19990	138	50	78	47	184	9	690.3	250.1	390.2	235.1	920.5	45
2013	21	41	Douglas	6	Central	Mostly Rural	61.6	24899	119	64	62	48	178	4	477.9	257	249	192.8	714.9	16.1
2013	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1153907	1966	419	1691	1123	3257	24	170.4	36.3	146.5	97.3	282.3	2.1
2013	23	45	Edgar	5	Central	Mostly Rural	51.8	21798	61	7	151	47	206	1	279.8	32.1	692.7	215.6	945	4.6
2013	24	47	Edwards	2	Southern	Completely Rural	100	8242	30	7	46	37	91	1	364	84.9	558.1	448.9	1104.1	12.1
2013	25	49	Effingham	4	Southern	Mostly Rural	59.7	42462	443	153	159	174	527	41	1043.3	360.3	374.5	409.8	1241.1	96.6
2013	26	51	Fayette	4	Southern	Mostly Rural	67	27003	402	73	207	103	399	16	1488.7	270.3	766.6	381.4	1477.6	59.3
2013	27	53	Ford	11	Central	Mostly Urban	41.8	16845	52	45	78	93	216	0	308.7	267.1	463	552.1	1282.3	0
2013	28	55	Franklin	2	Southern	Mostly Urban	48.6	48405	116	32	320	149	507	6	239.6	66.1	661.1	307.8	1047.4	12.4
2013	29	57	Fulton	9	Central	Mostly Rural	60	43716	65	10	155	50	218	3	148.7	22.9	354.6	114.4	498.7	6.9
2013	30	59	Gallatin	2	Southern	Completely Rural	100	6482	13	1	42	30	73	0	200.6	15.4	647.9	462.8	1126.2	0
2013	31	61	Greene	7	Central	Mostly Rural	70.8	16647	4	40	84	107	240	9	24	240.3	504.6	642.8	1441.7	54.1
2013	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63370	116	6	176	42	226	2	183.1	9.5	277.7	66.3	356.6	3.2
2013	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10229	22	2	25	10	38	1	215.1	19.6	244.4	97.8	371.5	9.8
2013	34	67	Hancock	9	Central	Mostly Rural	71	22469	26	0	44	5	50	1	115.7	0	195.8	22.3	222.5	4.5
2013	35	69	Hardin	2	Southern	Completely Rural	100	5006	14	1	21	50	72	0	279.7	20	419.5	998.8	1438.3	0
2013	36	71	Henderson	9	Central	Mostly Rural	99.7	8322	28	0	14	6	20	0	336.5	0	168.2	72.1	240.3	0
2013	37	73	Henry	14	Central	Mostly Rural	50.3	61425	552	4	181	47	232	0	898.7	6.5	294.7	76.5	377.7	0
2013	38	75	Iroquois	21	Central	Mostly Rural	71.7	35472	85	9	166	25	201	1	239.6	25.4	468	70.5	566.6	2.8
2013	39	77	Jackson	1	Southern	Mostly Urban	37.2	70500	205	190	386	247	891	68	290.8	269.5	547.5	350.4	1263.8	96.5
2013	40	79	Jasper	4	Southern	Mostly Rural	69.9	11807	25	38	57	58	155	2	211.7	321.8	482.8	491.2	1312.8	16.9
2013	41	81	Jefferson	2	Southern	Mostly Rural	58.8	47119	62	45	285	59	412	23	131.6	95.5	604.9	125.2	874.4	48.8
2013	42	83	Jersey	7	Southern	Mostly Rural	60.6	27589	36	6	79	10	95	0	130.5	21.7	286.3	36.2	344.3	0
2013	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	26850	103	29	53	57	144	5	383.6	108	197.4	212.3	536.3	18.6
2013	44	87	Johnson	1	Southern	Completely Rural	100	15194	42	10	48	36	99	5	276.4	65.8	315.9	236.9	651.6	32.9
2013	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	667105	1421	171	1719	470	2397	37	213	25.6	257.7	70.5	359.3	5.5
2013	46	91	Kankakee	21	Central	Mostly Urban	24.5	140129	148	2	516	167	685	0	105.6	1.4	368.2	119.2	488.8	0
2013	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	155642	1072	7	243	256	506	0	688.8	4.5	156.1	164.5	325.1	0
2013	48	95	Knox	9	Central	Mostly Urban	24.3	62579	106	23	218	51	302	10	169.4	36.8	348.4	81.5	482.6	16
2013	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	886111	731	513	1755	1019	3485	198	82.5	57.9	198.1	115	393.3	22.3
2013	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	137362	203	18	488	56	568	6	147.8	13.1	355.3	40.8	413.5	4.4
2013	51	101	Lawrence	2	Southern	Mostly Rural	58	19928	129	6	88	64	160	2	647.3	30.1	441.6	321.2	802.9	10
2013	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	42248	391	31	170	58	293	34	925.5	73.4	402.4	137.3	693.5	80.5
2013	53	105	Livingston	11	Central	Mostly Urban	40.8	45739	346	35	236	51	322	0	756.5	76.5	516	111.5	704	0
2013	54	107	Logan	11	Central	Mostly Urban	39.9	35590	959	21	172	120	326	13	2694.6	59	483.3	337.2	916	36.5
2013	55	109	McDonough	9	Central	Mostly Urban	29.5	37598	125	2	72	11	87	2	332.5	5.3	191.5	29.3	231.4	5.3
2013	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	385651	210	51	577	170	820	22	54.5	13.2	149.6	44.1	212.6	5.7
2013	57	113	McLean	11	Central	Mostly Urban	16.5	213906	331	57	1068	59	1191	7	154.7	26.6	499.3	27.6	556.8	3.3
2013	58	115	Macon	6	Central	Mostly Urban	15.3	134101	614	2	1202	416	1621	1	457.9	1.5	896.3	310.2	1208.8	0.7
2013	59	117	Macoupin	7	Central	Mostly Rural	58.5	56936	83	138	236	82	459	3	145.8	242.4	414.5	144	806.2	5.3
2013	60	119	Madison	3	Southern	Mostly Urban	13.3	326793	924	265	1294	135	1694	0	282.7	81.1	396	41.3	518.4	0
2013	61	121	Marion	4	Southern	Mostly Urban	45.1	47548	200	233	402	225	891	31	420.6	490	845.5	473.2	1873.9	65.2
2013	62	123	Marshall	10	Central	Completely Rural	100	14656	144	7	38	43	95	7	982.5	47.8	259.3	293.4	648.2	47.8
2013	63	125	Mason	8	Central	Mostly Rural	77.5	17122	44	38	83	57	184	6	257	221.9	484.8	332.9	1074.6	35
2013	64	127	Massac	1	Southern	Mostly Rural	50.5	18147	335	21	129	64	229	15	1846	115.7	710.9	352.7	1261.9	82.7
2013	65	129	Menard	8	Central	Mostly Rural	75.7	15412	89	5	25	19	52	3	577.5	32.4	162.2	123.3	337.4	19.5
2013	66	131	Mercer	14	Central	Mostly Rural	77.8	19651	42	5	77	38	122	2	213.7	25.4	391.8	193.4	620.8	10.2
2013	67	133	Monroe	20	Southern	Mostly Urban	41.4	41391	363	1	85	2	88	0	877	2.4	205.4	4.8	212.6	0
2013	68	135	Montgomery	4	Central	Mostly Urban	41.6	35530	203	143	112	278	533	0	571.3	402.5	315.2	782.4	1500.1	0
2013	69	137	Morgan	7	Central	Mostly Urban	36.2	42088	236	79	173	125	387	10	560.7	187.7	411	297	919.5	23.8
2013	70	139	Moultrie	6	Central	Mostly Rural	69.2	18531	60	35	41	36	125	13	323.8	188.9	221.3	194.3	674.5	70.2
2013	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	64546	521	20	157	86	276	13	807.2	31	243.2	133.2	427.6	20.1
2013	72	143	Peoria	10	Central	Mostly Urban	14.6	233722	3133	0	997	238	1299	64	1340.5	0	426.6	101.8	555.8	27.4
2013	73	145	Perry	20	Southern	Mostly Urban	43.6	26051	188	5	68	23	96	0	721.7	19.2	261	88.3	368.5	0
2013	74	147	Piatt	6	Central	Mostly Rural	67.7	20188	33	45	53	94	206	14	163.5	222.9	262.5	465.6	1020.4	69.3
2013	75	149	Pike	8	Central	Mostly Rural	72.3	19621	169	50	124	64	241	3	861.3	254.8	632	326.2	1228.3	15.3
2013	76	151	Pope	1	Southern	Completely Rural	100	5163	20	3	21	19	48	5	387.4	58.1	406.7	368	929.7	96.8
2013	77	153	Pulaski	1	Southern	Completely Rural	100	7215	140	5	58	50	116	3	1940.4	69.3	803.9	693	1607.8	41.6
2013	78	155	Putnam	10	Central	Completely Rural	100	7022	155	6	46	25	80	3	2207.3	85.4	655.1	356	1139.3	42.7
2013	79	157	Randolph	20	Southern	Mostly Urban	42.6	39505	98	2	86	26	114	0	248.1	5.1	217.7	65.8	288.6	0
2013	80	159	Richland	2	Southern	Mostly Urban	43.5	19550	30	6	111	37	154	0	153.5	30.7	567.8	189.3	787.7	0
2013	81	161	Rock Island	14	Central	Mostly Urban	10.9	180847	807	979	794	209	2013	31	446.2	541.3	439	115.6	1113.1	17.1
2013	82	163	St. Clair	20	Southern	Mostly Urban	9.8	331684	734	29	1646	119	1799	5	221.3	8.7	496.3	35.9	542.4	1.5
2013	83	165	Saline	1	Southern	Mostly Urban	43.7	30301	75	73	253	67	404	11	247.5	240.9	835	221.1	1333.3	36.3
2013	84	167	Sangamon	7	Central	Mostly Urban	14.1	245013	1564	13	662	324	999	0	638.3	5.3	270.2	132.2	407.7	0
2013	85	169	Schuyler	8	Central	Mostly Rural	57.6	8909	7	31	52	42	128	3	78.6	348	583.7	471.4	1436.7	33.7
2013	86	171	Scott	7	Central	Completely Rural	100	6358												
2013	87	173	Shelby	4	Central	Mostly Rural	77.7	26972	261	34	120	82	237	1	967.7	126.1	444.9	304	878.7	3.7
2013	88	175	Stark	10	Central	Completely Rural	100	6963	48	3	26	11	40	0	689.4	43.1	373.4	158	574.5	0
2013	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	56936	1534	65	346	244	664	9	2694.3	114.2	607.7	428.6	1166.2	15.8
2013	90	179	Tazewell	10	Central	Mostly Urban	20.4	167961	1455	81	426	177	709	25	866.3	48.2	253.6	105.4	422.1	14.9
2013	91	181	Union	1	Southern	Mostly Rural	65.9	21202	40	57	63	69	197	8	188.7	268.8	297.1	325.4	929.2	37.7
2013	92	183	Vermilion	5	Central	Mostly Urban	31.3	99973	250	46	438	219	728	25	250.1	46	438.1	219.1	728.2	25
2013	93	185	Wabash	2	Southern	Mostly Urban	38.9	14232	69	19	121	47	188	1	484.8	133.5	850.2	330.2	1321	7
2013	94	187	Warren	9	Central	Mostly Urban	45.5	21605	30	5	53	19	81	4	138.9	23.1	245.3	87.9	374.9	18.5
2013	95	189	Washington	20	Southern	Mostly Rural	73.6	17480	88	6	54	14	74	0	503.4	34.3	308.9	80.1	423.3	0
2013	96	191	Wayne	2	Southern	Mostly Rural	69.9	20454	54	11	50	39	103	3	264	53.8	244.5	190.7	503.6	14.7
2013	97	193	White	2	Southern	Mostly Rural	62	17596	34	1	71	15	92	5	193.2	5.7	403.5	85.2	522.8	28.4
2013	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	70635	417	138	350	146	652	18	590.4	195.4	495.5	206.7	923.1	25.5
2013	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	869340	696	239	1638	202	2079	0	80.1	27.5	188.4	23.2	239.1	0
2013	100	199	Williamson	1	Southern	Mostly Urban	34.8	82196	146	226	336	232	916	122	177.6	275	408.8	282.3	1114.4	148.4
2013	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	361134	1569	1216	2264	762	4256	14	434.5	336.7	626.9	211	1178.5	3.9
2013	102	203	Woodford	11	Central	Mostly Rural	54.9	48795	879	50	140	82	287	15	1801.4	102.5	286.9	168.1	588.2	30.7
2014	1	1	Adams	8	Central	Mostly Urban	32.6	82216	138	159	498	104	765	4	167.9	193.4	605.7	126.5	930.5	4.9
2014	2	3	Alexander	1	Southern	Mostly Rural	61.9	8803	88	5	72	19	123	27	999.7	56.8	817.9	215.8	1397.3	306.7
2014	3	5	Bond	3	Southern	Mostly Rural	60.7	20450	93	36	115	49	214	14	454.8	176	562.3	239.6	1046.5	68.5
2014	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	67783	922	35	177	109	330	9	1360.2	51.6	261.1	160.8	486.8	13.3
2014	5	9	Brown	8	Central	Mostly Urban	41.1	7885	4	11	31	32	80	6	50.7	139.5	393.2	405.8	1014.6	76.1
2014	6	11	Bureau	13	Central	Mostly Rural	57.4	41274	31	3	105	34	145	3	75.1	7.3	254.4	82.4	351.3	7.3
2014	7	13	Calhoun	8	Southern	Completely Rural	100	5950	15	4	22	12	41	3	252.1	67.2	369.7	201.7	689.1	50.4
2014	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	17660	207	8	66	35	109	0	1172.1	45.3	373.7	198.2	617.2	0
2014	9	17	Cass	8	Central	Mostly Rural	52.1	16265	103	41	87	58	193	7	633.3	252.1	534.9	356.6	1186.6	43
2014	10	19	Champaign	6	Central	Mostly Urban	12.7	247556	450	208	916	199	1355	32	181.8	84	370	80.4	547.4	12.9
2014	11	21	Christian	4	Central	Mostly Urban	43.5	41008	53	102	170	129	415	14	129.2	248.7	414.6	314.6	1012	34.1
2014	12	23	Clark	5	Southern	Mostly Rural	59.5	19742	44	2	90	25	117	0	222.9	10.1	455.9	126.6	592.6	0
2014	13	25	Clay	4	Southern	Mostly Rural	64.7	16469	77	54	127	56	247	10	467.5	327.9	771.1	340	1499.8	60.7
2014	14	27	Clinton	4	Southern	Mostly Urban	48.8	45714	187	63	102	54	225	6	409.1	137.8	223.1	118.1	492.2	13.1
2014	15	29	Coles	5	Central	Mostly Urban	24.3	62050	600	52	438	84	580	6	967	83.8	705.9	135.4	934.7	9.7
2014	16	31	Cook	co	Northern - Cook	Completely Urban	0	6442410	3961	5283	20111	6661	32458	403	61.5	82	312.2	103.4	503.8	6.3
2014	17	33	Crawford	2	Southern	Mostly Rural	60.2	23122	180	6	81	19	107	1	778.5	25.9	350.3	82.2	462.8	4.3
2014	18	35	Cumberland	5	Southern	Completely Rural	100	13447	61	6	57	20	87	4	453.6	44.6	423.9	148.7	647	29.7
2014	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	127493	922	0	328	130	459	1	723.2	0	257.3	102	360	0.8
2014	20	39	De Witt	6	Central	Mostly Urban	48.8	19736	154	48	69	46	173	10	780.3	243.2	349.6	233.1	876.6	50.7
2014	21	41	Douglas	6	Central	Mostly Rural	61.6	24949	121	53	59	36	156	8	485	212.4	236.5	144.3	625.3	32.1
2014	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1152764	1865	529	1632	1036	3216	19	161.8	45.9	141.6	89.9	279	1.6
2014	23	45	Edgar	5	Central	Mostly Rural	51.8	21619	48	3	121	41	166	1	222	13.9	559.7	189.6	767.8	4.6
2014	24	47	Edwards	2	Southern	Completely Rural	100	8171	19	7	40	38	85	0	232.5	85.7	489.5	465.1	1040.3	0
2014	25	49	Effingham	4	Southern	Mostly Rural	59.7	42275	228	221	163	169	626	73	539.3	522.8	385.6	399.8	1480.8	172.7
2014	26	51	Fayette	4	Southern	Mostly Rural	67	26837	380	76	173	111	363	3	1416	283.2	644.6	413.6	1352.6	11.2
2014	27	53	Ford	11	Central	Mostly Urban	41.8	16682	29	49	85	151	285	0	173.8	293.7	509.5	905.2	1708.4	0
2014	28	55	Franklin	2	Southern	Mostly Urban	48.6	48280	97	20	350	177	552	5	200.9	41.4	724.9	366.6	1143.3	10.4
2014	29	57	Fulton	9	Central	Mostly Rural	60	43246	54	7	144	44	198	3	124.9	16.2	333	101.7	457.8	6.9
2014	30	59	Gallatin	2	Southern	Completely Rural	100	6353	11	3	44	25	72	0	173.1	47.2	692.6	393.5	1133.3	0
2014	31	61	Greene	7	Central	Mostly Rural	70.8	16344	106	26	102	122	252	2	648.6	159.1	624.1	746.5	1541.9	12.2
2014	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63371	112	6	189	30	225	0	176.7	9.5	298.2	47.3	355.1	0
2014	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10172	25	0	34	7	43	2	245.8	0	334.3	68.8	422.7	19.7
2014	34	67	Hancock	9	Central	Mostly Rural	71	22212	16	2	44	0	48	2	72	9	198.1	0	216.1	9
2014	35	69	Hardin	2	Southern	Completely Rural	100	4969	14	1	19	40	60	0	281.7	20.1	382.4	805	1207.5	0
2014	36	71	Henderson	9	Central	Mostly Rural	99.7	8361	23	0	19	8	28	1	275.1	0	227.2	95.7	334.9	12
2014	37	73	Henry	14	Central	Mostly Rural	50.3	61171	536	7	180	39	226	0	876.2	11.4	294.3	63.8	369.5	0
2014	38	75	Iroquois	21	Central	Mostly Rural	71.7	35108	76	7	180	22	210	1	216.5	19.9	512.7	62.7	598.2	2.8
2014	39	77	Jackson	1	Southern	Mostly Urban	37.2	70141	225	117	366	191	738	64	320.8	166.8	521.8	272.3	1052.2	91.2
2014	40	79	Jasper	4	Southern	Mostly Rural	69.9	11855	17	28	58	57	144	1	143.4	236.2	489.2	480.8	1214.7	8.4
2014	41	81	Jefferson	2	Southern	Mostly Rural	58.8	46761	98	42	299	49	416	26	209.6	89.8	639.4	104.8	889.6	55.6
2014	42	83	Jersey	7	Southern	Mostly Rural	60.6	27378	32	5	77	11	95	2	116.9	18.3	281.2	40.2	347	7.3
2014	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	26703	91	35	44	44	127	4	340.8	131.1	164.8	164.8	475.6	15
2014	44	87	Johnson	1	Southern	Completely Rural	100	15195	50	9	30	40	82	3	329.1	59.2	197.4	263.2	539.7	19.7
2014	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	668428	1303	168	1662	438	2313	45	194.9	25.1	248.6	65.5	346	6.7
2014	46	91	Kankakee	21	Central	Mostly Urban	24.5	138830	130	1	486	164	651	0	93.6	0.7	350.1	118.1	468.9	0
2014	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	157731	1109	5	254	266	525	0	703.1	3.2	161	168.6	332.8	0
2014	48	95	Knox	9	Central	Mostly Urban	24.3	62340	111	20	232	52	311	7	178.1	32.1	372.2	83.4	498.9	11.2
2014	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	883858	727	492	1678	980	3322	172	82.3	55.7	189.8	110.9	375.9	19.5
2014	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	136223	138	20	508	91	621	2	101.3	14.7	372.9	66.8	455.9	1.5
2014	51	101	Lawrence	2	Southern	Mostly Rural	58	19694	137	3	94	68	172	7	695.6	15.2	477.3	345.3	873.4	35.5
2014	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	41947	345	24	162	63	284	35	822.5	57.2	386.2	150.2	677	83.4
2014	53	105	Livingston	11	Central	Mostly Urban	40.8	45158	232	20	230	41	291	0	513.8	44.3	509.3	90.8	644.4	0
2014	54	107	Logan	11	Central	Mostly Urban	39.9	35354	941	19	188	66	281	8	2661.7	53.7	531.8	186.7	794.8	22.6
2014	55	109	McDonough	9	Central	Mostly Urban	29.5	37076	102	5	90	8	104	1	275.1	13.5	242.7	21.6	280.5	2.7
2014	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	384101	179	50	533	158	756	15	46.6	13	138.8	41.1	196.8	3.9
2014	57	113	McLean	11	Central	Mostly Urban	16.5	212490	379	30	1129	66	1233	8	178.4	14.1	531.3	31.1	580.3	3.8
2014	58	115	Macon	6	Central	Mostly Urban	15.3	132837	607	7	1095	392	1494	0	457	5.3	824.3	295.1	1124.7	0
2014	59	117	Macoupin	7	Central	Mostly Rural	58.5	56243	113	139	210	65	415	1	200.9	247.1	373.4	115.6	737.9	1.8
2014	60	119	Madison	3	Southern	Mostly Urban	13.3	325996	921	195	1316	161	1672	0	282.5	59.8	403.7	49.4	512.9	0
2014	61	121	Marion	4	Southern	Mostly Urban	45.1	47422	228	181	354	193	740	12	480.8	381.7	746.5	407	1560.5	25.3
2014	62	123	Marshall	10	Central	Completely Rural	100	14364	147	9	46	34	97	8	1023.4	62.7	320.2	236.7	675.3	55.7
2014	63	125	Mason	8	Central	Mostly Rural	77.5	17060	46	22	93	65	186	6	269.6	129	545.1	381	1090.3	35.2
2014	64	127	Massac	1	Southern	Mostly Rural	50.5	18028	292	33	145	64	265	23	1619.7	183	804.3	355	1469.9	127.6
2014	65	129	Menard	8	Central	Mostly Rural	75.7	15340	97	10	29	28	68	1	632.3	65.2	189	182.5	443.3	6.5
2014	66	131	Mercer	14	Central	Mostly Rural	77.8	19406	36	1	61	38	100	0	185.5	5.2	314.3	195.8	515.3	0
2014	67	133	Monroe	20	Southern	Mostly Urban	41.4	41303	255	1	83	2	86	0	617.4	2.4	201	4.8	208.2	0
2014	68	135	Montgomery	4	Central	Mostly Urban	41.6	35449	157	147	108	275	530	0	442.9	414.7	304.7	775.8	1495.1	0
2014	69	137	Morgan	7	Central	Mostly Urban	36.2	41501	179	57	151	133	344	3	431.3	137.3	363.8	320.5	828.9	7.2
2014	70	139	Moultrie	6	Central	Mostly Rural	69.2	18463	38	36	37	25	113	15	205.8	195	200.4	135.4	612	81.2
2014	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	64040	556	20	165	126	320	9	868.2	31.2	257.7	196.8	499.7	14.1
2014	72	143	Peoria	10	Central	Mostly Urban	14.6	232344	3336	28	971	338	1374	37	1435.8	12.1	417.9	145.5	591.4	15.9
2014	73	145	Perry	20	Southern	Mostly Urban	43.6	25754	158	4	64	20	91	3	613.5	15.5	248.5	77.7	353.3	11.6
2014	74	147	Piatt	6	Central	Mostly Rural	67.7	20097	27	48	44	70	187	25	134.3	238.8	218.9	348.3	930.5	124.4
2014	75	149	Pike	8	Central	Mostly Rural	72.3	19467	151	38	129	76	253	10	775.7	195.2	662.7	390.4	1299.6	51.4
2014	76	151	Pope	1	Southern	Completely Rural	100	5039	25	4	25	8	43	6	496.1	79.4	496.1	158.8	853.3	119.1
2014	77	153	Pulaski	1	Southern	Completely Rural	100	7083	70	4	56	17	80	3	988.3	56.5	790.6	240	1129.5	42.4
2014	78	155	Putnam	10	Central	Completely Rural	100	6991	153	7	50	22	82	3	2188.5	100.1	715.2	314.7	1172.9	42.9
2014	79	157	Randolph	20	Southern	Mostly Urban	42.6	39504	111	3	87	28	119	1	281	7.6	220.2	70.9	301.2	2.5
2014	80	159	Richland	2	Southern	Mostly Urban	43.5	19607	34	7	129	36	173	1	173.4	35.7	657.9	183.6	882.3	5.1
2014	81	161	Rock Island	14	Central	Mostly Urban	10.9	180128	713	837	712	216	1799	34	395.8	464.7	395.3	119.9	998.7	18.9
2014	82	163	St. Clair	20	Southern	Mostly Urban	9.8	330053	675	23	1615	149	1789	2	204.5	7	489.3	45.1	542	0.6
2014	83	165	Saline	1	Southern	Mostly Urban	43.7	29855	92	70	261	79	420	10	308.2	234.5	874.2	264.6	1406.8	33.5
2014	84	167	Sangamon	7	Central	Mostly Urban	14.1	244882	1324	39	725	345	1111	2	540.7	15.9	296.1	140.9	453.7	0.8
2014	85	169	Schuyler	8	Central	Mostly Rural	57.6	8695	5	31	39	41	113	2	57.5	356.5	448.5	471.5	1299.6	23
2014	86	171	Scott	7	Central	Completely Rural	100	6304												
2014	87	173	Shelby	4	Central	Mostly Rural	77.7	26878	243	29	97	79	205	0	904.1	107.9	360.9	293.9	762.7	0
2014	88	175	Stark	10	Central	Completely Rural	100	6819	49	6	26	6	38	0	718.6	88	381.3	88	557.3	0
2014	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	56398	1500	69	336	225	636	6	2659.7	122.3	595.8	399	1127.7	10.6
2014	90	179	Tazewell	10	Central	Mostly Urban	20.4	166820	1206	127	368	138	652	19	722.9	76.1	220.6	82.7	390.8	11.4
2014	91	181	Union	1	Southern	Mostly Rural	65.9	21057	39	57	94	66	229	12	185.2	270.7	446.4	313.4	1087.5	57
2014	92	183	Vermilion	5	Central	Mostly Urban	31.3	98926	112	36	437	161	644	10	113.2	36.4	441.7	162.7	651	10.1
2014	93	185	Wabash	2	Southern	Mostly Urban	38.9	14127	7	11	104	39	155	1	49.6	77.9	736.2	276.1	1097.2	7.1
2014	94	187	Warren	9	Central	Mostly Urban	45.5	21658	29	5	53	13	73	2	133.9	23.1	244.7	60	337.1	9.2
2014	95	189	Washington	20	Southern	Mostly Rural	73.6	17435	72	7	39	11	57	0	413	40.1	223.7	63.1	326.9	0
2014	96	191	Wayne	2	Southern	Mostly Rural	69.9	20379	57	15	97	51	170	7	279.7	73.6	476	250.3	834.2	34.3
2014	97	193	White	2	Southern	Mostly Rural	62	17390	39	0	70	17	96	9	224.3	0	402.5	97.8	552	51.8
2014	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	69991	378	124	320	102	562	16	540.1	177.2	457.2	145.7	803	22.9
2014	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	867451	671	227	1579	182	1989	1	77.4	26.2	182	21	229.3	0.1
2014	100	199	Williamson	1	Southern	Mostly Urban	34.8	82112	129	234	319	194	852	105	157.1	285	388.5	236.3	1037.6	127.9
2014	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	357690	3431	71	2945	774	3816	26	959.2	19.8	823.3	216.4	1066.8	7.3
2014	102	203	Woodford	11	Central	Mostly Rural	54.9	48746	998	57	149	110	325	9	2047.3	116.9	305.7	225.7	666.7	18.5
2015	1	1	Adams	8	Central	Mostly Urban	32.6	82101	137	68	504	64	636	0	166.9	82.8	613.9	78	774.7	0
2015	2	3	Alexander	1	Southern	Mostly Rural	61.9	8380	72	7	71	13	106	15	859.2	83.5	847.3	155.1	1264.9	179
2015	3	5	Bond	3	Southern	Mostly Rural	60.7	19936	137	29	97	49	189	14	687.2	145.5	486.6	245.8	948	70.2
2015	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	67445	948	39	162	121	328	6	1405.6	57.8	240.2	179.4	486.3	8.9
2015	5	9	Brown	8	Central	Mostly Urban	41.1	7811	0	17	26	38	85	4	0	217.6	332.9	486.5	1088.2	51.2
2015	6	11	Bureau	13	Central	Mostly Rural	57.4	40798	31	6	132	39	178	1	76	14.7	323.5	95.6	436.3	2.5
2015	7	13	Calhoun	8	Southern	Completely Rural	100	5849	14	8	18	4	32	2	239.4	136.8	307.7	68.4	547.1	34.2
2015	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	17468	243	7	66	30	105	2	1391.1	40.1	377.8	171.7	601.1	11.4
2015	9	17	Cass	8	Central	Mostly Rural	52.1	15934	136	30	115	46	198	7	853.5	188.3	721.7	288.7	1242.6	43.9
2015	10	19	Champaign	6	Central	Mostly Urban	12.7	249124	389	193	975	219	1416	29	156.1	77.5	391.4	87.9	568.4	11.6
2015	11	21	Christian	4	Central	Mostly Urban	43.5	40477	99	83	175	108	384	18	244.6	205.1	432.3	266.8	948.7	44.5
2015	12	23	Clark	5	Southern	Mostly Rural	59.5	19503	49	5	86	27	119	1	251.2	25.6	441	138.4	610.2	5.1
2015	13	25	Clay	4	Southern	Mostly Rural	64.7	16404	62	45	129	54	240	12	378	274.3	786.4	329.2	1463.1	73.2
2015	14	27	Clinton	4	Southern	Mostly Urban	48.8	45746	159	64	134	58	271	15	347.6	139.9	292.9	126.8	592.4	32.8
2015	15	29	Coles	5	Central	Mostly Urban	24.3	61691	584	51	465	64	584	4	946.7	82.7	753.8	103.7	946.7	6.5
2015	16	31	Cook	co	Northern - Cook	Completely Urban	0	6420229	4522	5277	20861	6986	33612	488	70.4	82.2	324.9	108.8	523.5	7.6
2015	17	33	Crawford	2	Southern	Mostly Rural	60.2	23147	181	2	94	18	115	1	782	8.6	406.1	77.8	496.8	4.3
2015	18	35	Cumberland	5	Southern	Completely Rural	100	13335	72	10	59	12	84	3	539.9	75	442.4	90	629.9	22.5
2015	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	126936	966	0	367	138	505	0	761	0	289.1	108.7	397.8	0
2015	20	39	De Witt	6	Central	Mostly Urban	48.8	19725	224	43	58	38	152	13	1135.6	218	294	192.6	770.6	65.9
2015	21	41	Douglas	6	Central	Mostly Rural	61.6	24846	133	59	56	40	168	13	535.3	237.5	225.4	161	676.2	52.3
2015	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1150849	2110	495	1664	1056	3252	37	183.3	43	144.6	91.8	282.6	3.2
2015	23	45	Edgar	5	Central	Mostly Rural	51.8	21325	37	2	120	21	146	3	173.5	9.4	562.7	98.5	684.6	14.1
2015	24	47	Edwards	2	Southern	Completely Rural	100	7975	16	9	38	46	93	0	200.6	112.9	476.5	576.8	1166.1	0
2015	25	49	Effingham	4	Southern	Mostly Rural	59.7	42378	207	193	182	179	624	70	488.5	455.4	429.5	422.4	1472.5	165.2
2015	26	51	Fayette	4	Southern	Mostly Rural	67	26750	296	104	198	117	423	4	1106.5	388.8	740.2	437.4	1581.3	15
2015	27	53	Ford	11	Central	Mostly Urban	41.8	16683	16	61	98	188	349	2	95.9	365.6	587.4	1126.9	2091.9	12
2015	28	55	Franklin	2	Southern	Mostly Urban	48.6	48196	125	13	336	183	535	3	259.4	27	697.2	379.7	1110.1	6.2
2015	29	57	Fulton	9	Central	Mostly Rural	60	42858	37	4	137	30	171	0	86.3	9.3	319.7	70	399	0
2015	30	59	Gallatin	2	Southern	Completely Rural	100	6302	3	2	36	6	44	0	47.6	31.7	571.2	95.2	698.2	0
2015	31	61	Greene	7	Central	Mostly Rural	70.8	16227	137	25	85	113	229	6	844.3	154.1	523.8	696.4	1411.2	37
2015	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63367	94	3	173	19	195	0	148.3	4.7	273	30	307.7	0
2015	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10069	29	3	36	10	50	1	288	29.8	357.5	99.3	496.6	9.9
2015	34	67	Hancock	9	Central	Mostly Rural	71	22078	17	1	47	1	51	2	77	4.5	212.9	4.5	231	9.1
2015	35	69	Hardin	2	Southern	Completely Rural	100	4836	3	2	26	8	37	1	62	41.4	537.6	165.4	765.1	20.7
2015	36	71	Henderson	9	Central	Mostly Rural	99.7	8332	23	1	24	2	29	2	276	12	288	24	348.1	24
2015	37	73	Henry	14	Central	Mostly Rural	50.3	60878	545	25	163	25	214	1	895.2	41.1	267.7	41.1	351.5	1.6
2015	38	75	Iroquois	21	Central	Mostly Rural	71.7	34838	50	3	135	17	156	1	143.5	8.6	387.5	48.8	447.8	2.9
2015	39	77	Jackson	1	Southern	Mostly Urban	37.2	69962	156	85	350	228	692	29	223	121.5	500.3	325.9	989.1	41.5
2015	40	79	Jasper	4	Southern	Mostly Rural	69.9	11837	3	27	55	54	137	1	25.3	228.1	464.6	456.2	1157.4	8.4
2015	41	81	Jefferson	2	Southern	Mostly Rural	58.8	46733	115	21	324	31	395	19	246.1	44.9	693.3	66.3	845.2	40.7
2015	42	83	Jersey	7	Southern	Mostly Rural	60.6	26985	30	4	61	11	78	2	111.2	14.8	226.1	40.8	289	7.4
2015	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	26356	57	35	35	22	92	0	216.3	132.8	132.8	83.5	349.1	0
2015	44	87	Johnson	1	Southern	Completely Rural	100	15110	44	7	32	34	74	1	291.2	46.3	211.8	225	489.7	6.6
2015	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	670029	1308	200	1588	453	2269	28	195.2	29.8	237	67.6	338.6	4.2
2015	46	91	Kankakee	21	Central	Mostly Urban	24.5	138215	100	6	474	175	655	0	72.4	4.3	342.9	126.6	473.9	0
2015	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	159212	882	0	242	209	451	0	554	0	152	131.3	283.3	0
2015	48	95	Knox	9	Central	Mostly Urban	24.3	61598	95	13	219	49	285	4	154.2	21.1	355.5	79.5	462.7	6.5
2015	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	881396	713	568	1572	897	3226	189	80.9	64.4	178.4	101.8	366	21.4
2015	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	135311	158	16	509	79	604	0	116.8	11.8	376.2	58.4	446.4	0
2015	51	101	Lawrence	2	Southern	Mostly Rural	58	19601	133	6	88	71	168	3	678.5	30.6	449	362.2	857.1	15.3
2015	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	41424	312	23	153	56	266	34	753.2	55.5	369.4	135.2	642.1	82.1
2015	53	105	Livingston	11	Central	Mostly Urban	40.8	44587	137	27	230	45	302	0	307.3	60.6	515.8	100.9	677.3	0
2015	54	107	Logan	11	Central	Mostly Urban	39.9	34924	862	22	180	93	311	16	2468.2	63	515.4	266.3	890.5	45.8
2015	55	109	McDonough	9	Central	Mostly Urban	29.5	36704	137	3	82	8	94	1	373.3	8.2	223.4	21.8	256.1	2.7
2015	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	383163	188	52	525	144	738	17	49.1	13.6	137	37.6	192.6	4.4
2015	57	113	McLean	11	Central	Mostly Urban	16.5	211214	480	16	1177	100	1296	3	227.3	7.6	557.3	47.3	613.6	1.4
2015	58	115	Macon	6	Central	Mostly Urban	15.3	131373	585	4	955	338	1297	0	445.3	3	726.9	257.3	987.3	0
2015	59	117	Macoupin	7	Central	Mostly Rural	58.5	55718	125	133	259	85	477	0	224.3	238.7	464.8	152.6	856.1	0
2015	60	119	Madison	3	Southern	Mostly Urban	13.3	325119	934	119	1272	195	1586	0	287.3	36.6	391.2	60	487.8	0
2015	61	121	Marion	4	Southern	Mostly Urban	45.1	47249	173	164	380	170	740	26	366.1	347.1	804.2	359.8	1566.2	55
2015	62	123	Marshall	10	Central	Completely Rural	100	14314	112	8	49	26	88	5	782.5	55.9	342.3	181.6	614.8	34.9
2015	63	125	Mason	8	Central	Mostly Rural	77.5	16763	50	30	89	89	214	6	298.3	179	530.9	530.9	1276.6	35.8
2015	64	127	Massac	1	Southern	Mostly Rural	50.5	17806	277	41	120	38	221	22	1555.7	230.3	673.9	213.4	1241.2	123.6
2015	65	129	Menard	8	Central	Mostly Rural	75.7	15067	93	10	35	31	79	3	617.2	66.4	232.3	205.7	524.3	19.9
2015	66	131	Mercer	14	Central	Mostly Rural	77.8	19172	28	2	66	44	113	1	146	10.4	344.3	229.5	589.4	5.2
2015	67	133	Monroe	20	Southern	Mostly Urban	41.4	41545	286	2	92	4	98	0	688.4	4.8	221.4	9.6	235.9	0
2015	68	135	Montgomery	4	Central	Mostly Urban	41.6	35144	138	143	126	277	546	0	392.7	406.9	358.5	788.2	1553.6	0
2015	69	137	Morgan	7	Central	Mostly Urban	36.2	41574	160	66	140	150	375	19	384.9	158.8	336.7	360.8	902	45.7
2015	70	139	Moultrie	6	Central	Mostly Rural	69.2	18465	31	39	46	24	123	14	167.9	211.2	249.1	130	666.1	75.8
2015	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	63455	527	20	174	123	321	4	830.5	31.5	274.2	193.8	505.9	6.3
2015	72	143	Peoria	10	Central	Mostly Urban	14.6	231094	3368	37	1030	375	1485	43	1457.4	16	445.7	162.3	642.6	18.6
2015	73	145	Perry	20	Southern	Mostly Urban	43.6	25714	117	2	64	13	82	3	455	7.8	248.9	50.6	318.9	11.7
2015	74	147	Piatt	6	Central	Mostly Rural	67.7	20016	36	52	62	76	219	29	179.9	259.8	309.8	379.7	1094.1	144.9
2015	75	149	Pike	8	Central	Mostly Rural	72.3	19331	118	24	109	82	232	17	610.4	124.2	563.9	424.2	1200.1	87.9
2015	76	151	Pope	1	Southern	Completely Rural	100	4909	11	5	24	12	44	3	224.1	101.9	488.9	244.4	896.3	61.1
2015	77	153	Pulaski	1	Southern	Completely Rural	100	6895	58	5	60	14	81	2	841.2	72.5	870.2	203	1174.8	29
2015	78	155	Putnam	10	Central	Completely Rural	100	6857	93	5	14	7	27	1	1356.3	72.9	204.2	102.1	393.8	14.6
2015	79	157	Randolph	20	Southern	Mostly Urban	42.6	39040	119	1	86	29	116	0	304.8	2.6	220.3	74.3	297.1	0
2015	80	159	Richland	2	Southern	Mostly Urban	43.5	19539	33	4	125	43	172	0	168.9	20.5	639.7	220.1	880.3	0
2015	81	161	Rock Island	14	Central	Mostly Urban	10.9	179015	754	788	613	154	1584	29	421.2	440.2	342.4	86	884.8	16.2
2015	82	163	St. Clair	20	Southern	Mostly Urban	9.8	328061	687	31	1504	153	1693	5	209.4	9.4	458.5	46.6	516.1	1.5
2015	83	165	Saline	1	Southern	Mostly Urban	43.7	29890	104	57	264	100	428	7	347.9	190.7	883.2	334.6	1431.9	23.4
2015	84	167	Sangamon	7	Central	Mostly Urban	14.1	244296	1291	78	725	294	1099	2	528.5	31.9	296.8	120.3	449.9	0.8
2015	85	169	Schuyler	8	Central	Mostly Rural	57.6	8547	22	25	31	46	122	20	257.4	292.5	362.7	538.2	1427.4	234
2015	86	171	Scott	7	Central	Completely Rural	100	6237												
2015	87	173	Shelby	4	Central	Mostly Rural	77.7	26455	214	29	88	55	172	0	808.9	109.6	332.6	207.9	650.2	0
2015	88	175	Stark	10	Central	Completely Rural	100	6722	32	3	24	5	33	1	476	44.6	357	74.4	490.9	14.9
2015	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	55594	1508	74	339	172	587	2	2712.5	133.1	609.8	309.4	1055.9	3.6
2015	90	179	Tazewell	10	Central	Mostly Urban	20.4	165312	1068	138	372	178	696	8	646.1	83.5	225	107.7	421	4.8
2015	91	181	Union	1	Southern	Mostly Rural	65.9	20949	74	50	102	62	227	13	353.2	238.7	486.9	296	1083.6	62.1
2015	92	183	Vermilion	5	Central	Mostly Urban	31.3	98141	111	52	404	146	616	14	113.1	53	411.7	148.8	627.7	14.3
2015	93	185	Wabash	2	Southern	Mostly Urban	38.9	14205	4	7	87	30	124	0	28.2	49.3	612.5	211.2	872.9	0
2015	94	187	Warren	9	Central	Mostly Urban	45.5	21308	26	4	42	7	54	1	122	18.8	197.1	32.9	253.4	4.7
2015	95	189	Washington	20	Southern	Mostly Rural	73.6	17258	40	4	33	10	47	0	231.8	23.2	191.2	57.9	272.3	0
2015	96	191	Wayne	2	Southern	Mostly Rural	69.9	20303	49	13	96	43	158	6	241.3	64	472.8	211.8	778.2	29.6
2015	97	193	White	2	Southern	Mostly Rural	62	17352	46	0	58	25	91	8	265.1	0	334.3	144.1	524.4	46.1
2015	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	69835	359	149	341	122	629	17	514.1	213.4	488.3	174.7	900.7	24.3
2015	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	865208	623	204	1564	176	1944	0	72	23.6	180.8	20.3	224.7	0
2015	100	199	Williamson	1	Southern	Mostly Urban	34.8	82322	110	222	332	181	864	129	133.6	269.7	403.3	219.9	1049.5	156.7
2015	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	355559	3685	83	2498	697	3283	5	1036.4	23.3	702.6	196	923.3	1.4
2015	102	203	Woodford	11	Central	Mostly Rural	54.9	48555	1181	56	145	119	331	11	2432.3	115.3	298.6	245.1	681.7	22.7
2016	1	1	Adams	8	Central	Mostly Urban	32.6	81646	132	40	423	64	528	1	161.7	49	518.1	78.4	646.7	1.2
2016	2	3	Alexander	1	Southern	Mostly Rural	61.9	7953	47	7	58	11	96	20	591	88	729.3	138.3	1207.1	251.5
2016	3	5	Bond	3	Southern	Mostly Rural	60.7	19773	145	21	103	39	181	17	733.3	106.2	520.9	197.2	915.4	86
2016	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	67272	581	46	152	100	303	5	863.7	68.4	225.9	148.7	450.4	7.4
2016	5	9	Brown	8	Central	Mostly Urban	41.1	7677	13	16	18	26	61	1	169.3	208.4	234.5	338.7	794.6	13
2016	6	11	Bureau	13	Central	Mostly Rural	57.4	40693	28	7	150	41	200	2	68.8	17.2	368.6	100.8	491.5	4.9
2016	7	13	Calhoun	8	Southern	Completely Rural	100	5878	10	3	16	1	20	0	170.1	51	272.2	17	340.3	0
2016	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	17465	254	6	72	14	93	1	1454.3	34.4	412.3	80.2	532.5	5.7
2016	9	17	Cass	8	Central	Mostly Rural	52.1	15750	145	26	106	42	181	7	920.6	165.1	673	266.7	1149.2	44.4
2016	10	19	Champaign	6	Central	Mostly Urban	12.7	250029	342	154	887	210	1273	22	136.8	61.6	354.8	84	509.1	8.8
2016	11	21	Christian	4	Central	Mostly Urban	43.5	40140	90	78	167	82	341	14	224.2	194.3	416	204.3	849.5	34.9
2016	12	23	Clark	5	Southern	Mostly Rural	59.5	19505	49	7	81	34	123	1	251.2	35.9	415.3	174.3	630.6	5.1
2016	13	25	Clay	4	Southern	Mostly Rural	64.7	16312	61	43	114	67	234	10	374	263.6	698.9	410.7	1434.5	61.3
2016	14	27	Clinton	4	Southern	Mostly Urban	48.8	45629	193	59	111	62	243	11	423	129.3	243.3	135.9	532.6	24.1
2016	15	29	Coles	5	Central	Mostly Urban	24.3	61249	629	57	473	47	585	8	1027	93.1	772.3	76.7	955.1	13.1
2016	16	31	Cook	co	Northern - Cook	Completely Urban	0	6385543	4143	4071	18796	5655	29126	604	64.9	63.8	294.4	88.6	456.1	9.5
2016	17	33	Crawford	2	Southern	Mostly Rural	60.2	22992	182	4	85	25	116	2	791.6	17.4	369.7	108.7	504.5	8.7
2016	18	35	Cumberland	5	Southern	Completely Rural	100	13342	82	9	56	17	85	3	614.6	67.5	419.7	127.4	637.1	22.5
2016	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	126785	983	0	350	130	480	0	775.3	0	276.1	102.5	378.6	0
2016	20	39	De Witt	6	Central	Mostly Urban	48.8	19711	178	38	67	23	148	18	903	192.8	339.9	116.7	750.8	91.3
2016	21	41	Douglas	6	Central	Mostly Rural	61.6	24711	141	58	61	41	171	11	570.6	234.7	246.9	165.9	692	44.5
2016	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1146059	2182	509	1751	913	3323	150	190.4	44.4	152.8	79.7	290	13.1
2016	23	45	Edgar	5	Central	Mostly Rural	51.8	21162	49	4	132	29	165	0	231.5	18.9	623.8	137	779.7	0
2016	24	47	Edwards	2	Southern	Completely Rural	100	8034	12	12	39	60	113	2	149.4	149.4	485.4	746.8	1406.5	24.9
2016	25	49	Effingham	4	Southern	Mostly Rural	59.7	42304	253	200	167	130	582	85	598.1	472.8	394.8	307.3	1375.8	200.9
2016	26	51	Fayette	4	Southern	Mostly Rural	67	26174	266	122	208	93	428	5	1016.3	466.1	794.7	355.3	1635.2	19.1
2016	27	53	Ford	11	Central	Mostly Urban	41.8	16444	66	57	91	147	308	13	401.4	346.6	553.4	893.9	1873	79.1
2016	28	55	Franklin	2	Southern	Mostly Urban	48.6	47784	119	10	383	199	594	2	249	20.9	801.5	416.5	1243.1	4.2
2016	29	57	Fulton	9	Central	Mostly Rural	60	42628	33	3	121	32	158	2	77.4	7	283.9	75.1	370.6	4.7
2016	30	59	Gallatin	2	Southern	Completely Rural	100	6240	3	1	35	5	41	0	48.1	16	560.9	80.1	657.1	0
2016	31	61	Greene	7	Central	Mostly Rural	70.8	15900	157	16	115	152	287	4	987.4	100.6	723.3	956	1805	25.2
2016	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63228	95	1	166	27	195	1	150.2	1.6	262.5	42.7	308.4	1.6
2016	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10030	29	3	34	12	51	2	289.1	29.9	339	119.6	508.5	19.9
2016	34	67	Hancock	9	Central	Mostly Rural	71	22079	23	1	44	7	54	2	104.2	4.5	199.3	31.7	244.6	9.1
2016	35	69	Hardin	2	Southern	Completely Rural	100	4742	4	2	36	9	47	0	84.4	42.2	759.2	189.8	991.1	0
2016	36	71	Henderson	9	Central	Mostly Rural	99.7	8177	20	3	27	3	35	1	244.6	36.7	330.2	36.7	428	12.2
2016	37	73	Henry	14	Central	Mostly Rural	50.3	60677	535	22	167	37	226	0	881.7	36.3	275.2	61	372.5	0
2016	38	75	Iroquois	21	Central	Mostly Rural	71.7	34326	65	6	111	16	133	0	189.4	17.5	323.4	46.6	387.5	0
2016	39	77	Jackson	1	Southern	Mostly Urban	37.2	69551	156	95	372	250	753	36	224.3	136.6	534.9	359.4	1082.7	51.8
2016	40	79	Jasper	4	Southern	Mostly Rural	69.9	11743	2	16	60	61	140	3	17	136.3	510.9	519.5	1192.2	25.5
2016	41	81	Jefferson	2	Southern	Mostly Rural	58.8	46744	104	22	336	38	408	12	222.5	47.1	718.8	81.3	872.8	25.7
2016	42	83	Jersey	7	Southern	Mostly Rural	60.6	26574	40	6	47	10	66	3	150.5	22.6	176.9	37.6	248.4	11.3
2016	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	26042	70	33	31	23	88	1	268.8	126.7	119	88.3	337.9	3.8
2016	44	87	Johnson	1	Southern	Completely Rural	100	14799	44	8	42	31	82	1	297.3	54.1	283.8	209.5	554.1	6.8
2016	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	670427	1332	203	1585	457	2263	18	198.7	30.3	236.4	68.2	337.5	2.7
2016	46	91	Kankakee	21	Central	Mostly Urban	24.5	137039	116	2	425	127	554	0	84.6	1.5	310.1	92.7	404.3	0
2016	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	161038	719	12	234	161	408	1	446.5	7.5	145.3	100	253.4	0.6
2016	48	95	Knox	9	Central	Mostly Urban	24.3	61034	133	8	213	31	256	4	217.9	13.1	349	50.8	419.4	6.6
2016	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	879109	728	515	1330	862	2897	190	82.8	58.6	151.3	98.1	329.5	21.6
2016	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	134167	167	14	515	56	585	0	124.5	10.4	383.8	41.7	436	0
2016	51	101	Lawrence	2	Southern	Mostly Rural	58	19251	135	6	95	74	177	2	701.3	31.2	493.5	384.4	919.4	10.4
2016	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	41332	339	34	160	69	313	50	820.2	82.3	387.1	166.9	757.3	121
2016	53	105	Livingston	11	Central	Mostly Urban	40.8	43962	56	37	252	26	316	1	127.4	84.2	573.2	59.1	718.8	2.3
2016	54	107	Logan	11	Central	Mostly Urban	39.9	34806	675	25	180	121	329	3	1939.3	71.8	517.2	347.6	945.2	8.6
2016	55	109	McDonough	9	Central	Mostly Urban	29.5	36192	142	3	88	3	94	0	392.4	8.3	243.1	8.3	259.7	0
2016	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	381345	201	51	527	134	790	18	52.7	13.4	138.2	35.1	207.2	4.7
2016	57	113	McLean	11	Central	Mostly Urban	16.5	211026	501	1	1025	119	1146	1	237.4	0.5	485.7	56.4	543.1	0.5
2016	58	115	Macon	6	Central	Mostly Urban	15.3	130243	554	2	921	310	1233	0	425.4	1.5	707.1	238	946.7	0
2016	59	117	Macoupin	7	Central	Mostly Rural	58.5	55491	178	164	265	81	513	3	320.8	295.5	477.6	146	924.5	5.4
2016	60	119	Madison	3	Southern	Mostly Urban	13.3	324264	1005	91	1245	156	1492	0	309.9	28.1	383.9	48.1	460.1	0
2016	61	121	Marion	4	Southern	Mostly Urban	45.1	46814	166	156	401	218	800	25	354.6	333.2	856.6	465.7	1708.9	53.4
2016	62	123	Marshall	10	Central	Completely Rural	100	14311	94	10	30	16	57	1	656.8	69.9	209.6	111.8	398.3	7
2016	63	125	Mason	8	Central	Mostly Rural	77.5	16533	43	26	89	62	181	4	260.1	157.3	538.3	375	1094.8	24.2
2016	64	127	Massac	1	Southern	Mostly Rural	50.5	17697	249	35	93	40	182	14	1407	197.8	525.5	226	1028.4	79.1
2016	65	129	Menard	8	Central	Mostly Rural	75.7	15179	93	10	26	25	61	0	612.7	65.9	171.3	164.7	401.9	0
2016	66	131	Mercer	14	Central	Mostly Rural	77.8	18956	30	0	74	36	100	0	158.3	0	390.4	189.9	527.5	0
2016	67	133	Monroe	20	Southern	Mostly Urban	41.4	41781	290	0	107	1	108	0	694.1	0	256.1	2.4	258.5	0
2016	68	135	Montgomery	4	Central	Mostly Urban	41.6	34943	171	132	141	276	549	0	489.4	377.8	403.5	789.9	1571.1	0
2016	69	137	Morgan	7	Central	Mostly Urban	36.2	41358	130	68	145	137	375	25	314.3	164.4	350.6	331.3	906.7	60.4
2016	70	139	Moultrie	6	Central	Mostly Rural	69.2	18317	29	36	56	23	133	18	158.3	196.5	305.7	125.6	726.1	98.3
2016	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	62923	551	26	175	101	310	8	875.7	41.3	278.1	160.5	492.7	12.7
2016	72	143	Peoria	10	Central	Mostly Urban	14.6	229313	2617	131	972	374	1506	29	1141.2	57.1	423.9	163.1	656.7	12.6
2016	73	145	Perry	20	Southern	Mostly Urban	43.6	25595	128	6	77	8	95	4	500.1	23.4	300.8	31.3	371.2	15.6
2016	74	147	Piatt	6	Central	Mostly Rural	67.7	20244	41	35	65	78	200	22	202.5	172.9	321.1	385.3	987.9	108.7
2016	75	149	Pike	8	Central	Mostly Rural	72.3	19309	112	23	108	71	216	14	580	119.1	559.3	367.7	1118.6	72.5
2016	76	151	Pope	1	Southern	Completely Rural	100	4748	11	9	16	3	31	3	231.7	189.6	337	63.2	652.9	63.2
2016	77	153	Pulaski	1	Southern	Completely Rural	100	6851	25	3	58	13	76	2	364.9	43.8	846.6	189.8	1109.3	29.2
2016	78	155	Putnam	10	Central	Completely Rural	100	6823	61	1	19	12	33	1	894	14.7	278.5	175.9	483.7	14.7
2016	79	157	Randolph	20	Southern	Mostly Urban	42.6	38617	122	0	90	11	101	0	315.9	0	233.1	28.5	261.5	0
2016	80	159	Richland	2	Southern	Mostly Urban	43.5	19388	33	6	92	55	153	0	170.2	30.9	474.5	283.7	789.1	0
2016	81	161	Rock Island	14	Central	Mostly Urban	10.9	177351	757	769	629	180	1607	29	426.8	433.6	354.7	101.5	906.1	16.4
2016	82	163	St. Clair	20	Southern	Mostly Urban	9.8	326105	686	28	1566	158	1757	5	210.4	8.6	480.2	48.5	538.8	1.5
2016	83	165	Saline	1	Southern	Mostly Urban	43.7	29501	99	50	290	114	457	3	335.6	169.5	983	386.4	1549.1	10.2
2016	84	167	Sangamon	7	Central	Mostly Urban	14.1	242907	1367	100	800	228	1131	3	562.8	41.2	329.3	93.9	465.6	1.2
2016	85	169	Schuyler	8	Central	Mostly Rural	57.6	8373	46	28	33	42	109	6	549.4	334.4	394.1	501.6	1301.8	71.7
2016	86	171	Scott	7	Central	Completely Rural	100	6132	0	0	0	0	0	0	0	0	0	0	0	0
2016	87	173	Shelby	4	Central	Mostly Rural	77.7	26345	172	20	85	56	163	2	652.9	75.9	322.6	212.6	618.7	7.6
2016	88	175	Stark	10	Central	Completely Rural	100	6767	28	2	25	4	31	0	413.8	29.6	369.4	59.1	458.1	0
2016	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	55412	1091	49	298	167	518	4	1968.9	88.4	537.8	301.4	934.8	7.2
2016	90	179	Tazewell	10	Central	Mostly Urban	20.4	164778	1003	126	327	135	593	5	608.7	76.5	198.4	81.9	359.9	3
2016	91	181	Union	1	Southern	Mostly Rural	65.9	20729	69	34	93	68	209	14	332.9	164	448.6	328	1008.2	67.5
2016	92	183	Vermilion	5	Central	Mostly Urban	31.3	97271	132	58	484	167	726	17	135.7	59.6	497.6	171.7	746.4	17.5
2016	93	185	Wabash	2	Southern	Mostly Urban	38.9	14097	10	6	76	30	112	0	70.9	42.6	539.1	212.8	794.5	0
2016	94	187	Warren	9	Central	Mostly Urban	45.5	21131	24	2	51	8	62	1	113.6	9.5	241.4	37.9	293.4	4.7
2016	95	189	Washington	20	Southern	Mostly Rural	73.6	17202	62	3	54	12	69	0	360.4	17.4	313.9	69.8	401.1	0
2016	96	191	Wayne	2	Southern	Mostly Rural	69.9	20363	45	15	102	32	153	4	221	73.7	500.9	157.1	751.4	19.6
2016	97	193	White	2	Southern	Mostly Rural	62	17178	65	2	84	27	121	8	378.4	11.6	489	157.2	704.4	46.6
2016	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	69163	366	153	331	113	624	27	529.2	221.2	478.6	163.4	902.2	39
2016	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	865644	572	204	1611	197	2012	0	66.1	23.6	186.1	22.8	232.4	0
2016	100	199	Williamson	1	Southern	Mostly Urban	34.8	82383	129	163	362	162	808	121	156.6	197.9	439.4	196.6	980.8	146.9
2016	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	353900	3265	124	2328	613	3070	5	922.6	35	657.8	173.2	867.5	1.4
2016	102	203	Woodford	11	Central	Mostly Rural	54.9	48464	1076	40	154	119	320	7	2220.2	82.5	317.8	245.5	660.3	14.4
2017	1	1	Adams	8	Central	Mostly Urban	32.6	81014	129	33	450	71	555	1	159.2	40.7	555.5	87.6	685.1	1.2
2017	2	3	Alexander	1	Southern	Mostly Rural	61.9	7781	25	5	61	11	97	20	321.3	64.3	784	141.4	1246.6	257
2017	3	5	Bond	3	Southern	Mostly Rural	60.7	19877	100	24	123	55	220	18	503.1	120.7	618.8	276.7	1106.8	90.6
2017	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	66984	435	53	169	101	328	5	649.4	79.1	252.3	150.8	489.7	7.5
2017	5	9	Brown	8	Central	Mostly Urban	41.1	7667	19	15	24	15	55	1	247.8	195.6	313	195.6	717.4	13
2017	6	11	Bureau	13	Central	Mostly Rural	57.4	40304	45	5	168	48	222	1	111.7	12.4	416.8	119.1	550.8	2.5
2017	7	13	Calhoun	8	Southern	Completely Rural	100	5842	11	7	10	7	26	2	188.3	119.8	171.2	119.8	445.1	34.2
2017	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	17286	221	9	57	19	87	2	1278.5	52.1	329.7	109.9	503.3	11.6
2017	9	17	Cass	8	Central	Mostly Rural	52.1	15589	148	24	85	31	143	3	949.4	154	545.3	198.9	917.3	19.2
2017	10	19	Champaign	6	Central	Mostly Urban	12.7	250547	386	122	821	199	1187	45	154.1	48.7	327.7	79.4	473.8	18
2017	11	21	Christian	4	Central	Mostly Urban	43.5	39830	79	79	185	75	360	21	198.3	198.3	464.5	188.3	903.8	52.7
2017	12	23	Clark	5	Southern	Mostly Rural	59.5	19447	63	8	91	29	133	5	324	41.1	467.9	149.1	683.9	25.7
2017	13	25	Clay	4	Southern	Mostly Rural	64.7	16246	57	45	106	60	219	8	350.9	277	652.5	369.3	1348	49.2
2017	14	27	Clinton	4	Southern	Mostly Urban	48.8	45671	223	44	118	62	231	7	488.3	96.3	258.4	135.8	505.8	15.3
2017	15	29	Coles	5	Central	Mostly Urban	24.3	60761	638	43	475	104	631	9	1050	70.8	781.8	171.2	1038.5	14.8
2017	16	31	Cook	co	Northern - Cook	Completely Urban	0	6345288	3471	3919	17573	5670	28100	938	54.7	61.8	276.9	89.4	442.8	14.8
2017	17	33	Crawford	2	Southern	Mostly Rural	60.2	22763	238	6	107	14	129	2	1045.6	26.4	470.1	61.5	566.7	8.8
2017	18	35	Cumberland	5	Southern	Completely Rural	100	13340	63	8	62	15	87	2	472.3	60	464.8	112.4	652.2	15
2017	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	127062	915	0	338	114	452	0	720.1	0	266	89.7	355.7	0
2017	20	39	De Witt	6	Central	Mostly Urban	48.8	19349	147	45	52	23	145	25	759.7	232.6	268.7	118.9	749.4	129.2
2017	21	41	Douglas	6	Central	Mostly Rural	61.6	24550	136	57	69	43	183	14	554	232.2	281.1	175.2	745.4	57
2017	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1143609	2222	502	1776	645	5666	171	194.3	43.9	155.3	56.4	495.4	15
2017	23	45	Edgar	5	Central	Mostly Rural	51.8	21005	59	3	149	18	170	0	280.9	14.3	709.4	85.7	809.3	0
2017	24	47	Edwards	2	Southern	Completely Rural	100	7909	7	16	51	48	122	7	88.5	202.3	644.8	606.9	1542.5	88.5
2017	25	49	Effingham	4	Southern	Mostly Rural	59.7	42268	261	151	231	87	556	87	617.5	357.2	546.5	205.8	1315.4	205.8
2017	26	51	Fayette	4	Southern	Mostly Rural	67	26099	244	105	212	56	383	10	934.9	402.3	812.3	214.6	1467.5	38.3
2017	27	53	Ford	11	Central	Mostly Urban	41.8	16380	63	65	89	117	290	19	384.6	396.8	543.3	714.3	1770.5	116
2017	28	55	Franklin	2	Southern	Mostly Urban	48.6	47777	142	6	440	193	640	1	297.2	12.6	920.9	404	1339.6	2.1
2017	29	57	Fulton	9	Central	Mostly Rural	60	42075	34	10	120	30	161	1	80.8	23.8	285.2	71.3	382.7	2.4
2017	30	59	Gallatin	2	Southern	Completely Rural	100	6114	4	1	44	10	55	0	65.4	16.4	719.7	163.6	899.6	0
2017	31	61	Greene	7	Central	Mostly Rural	70.8	15946	89	5	115	112	234	2	558.1	31.4	721.2	702.4	1467.5	12.5
2017	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63589	107	1	175	27	203	0	168.3	1.6	275.2	42.5	319.2	0
2017	33	65	Hamilton	2	Southern	Mostly Rural	68.1	10021	32	6	42	9	59	2	319.3	59.9	419.1	89.8	588.8	20
2017	34	67	Hancock	9	Central	Mostly Rural	71	21752	52	3	68	7	80	2	239.1	13.8	312.6	32.2	367.8	9.2
2017	35	69	Hardin	2	Southern	Completely Rural	100	4619	4	2	37	8	47	0	86.6	43.3	801	173.2	1017.5	0
2017	36	71	Henderson	9	Central	Mostly Rural	99.7	8092	29	0	21	3	25	1	358.4	0	259.5	37.1	308.9	12.4
2017	37	73	Henry	14	Central	Mostly Rural	50.3	60267	551	9	184	44	238	1	914.3	14.9	305.3	73	394.9	1.7
2017	38	75	Iroquois	21	Central	Mostly Rural	71.7	33845	57	5	151	23	179	0	168.4	14.8	446.2	68	528.9	0
2017	39	77	Jackson	1	Southern	Mostly Urban	37.2	68721	131	94	360	214	691	23	190.6	136.8	523.9	311.4	1005.5	33.5
2017	40	79	Jasper	4	Southern	Mostly Rural	69.9	11673	2	14	55	82	153	2	17.1	119.9	471.2	702.5	1310.7	17.1
2017	41	81	Jefferson	2	Southern	Mostly Rural	58.8	46553	112	34	324	36	426	32	240.6	73	696	77.3	915.1	68.7
2017	42	83	Jersey	7	Southern	Mostly Rural	60.6	26416	37	6	54	9	69	0	140.1	22.7	204.4	34.1	261.2	0
2017	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	25654	84	35	35	33	103	0	327.4	136.4	136.4	128.6	401.5	0
2017	44	87	Johnson	1	Southern	Completely Rural	100	14725	31	8	53	46	108	1	210.5	54.3	359.9	312.4	733.4	6.8
2017	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	670373	1329	189	1570	472	2241	10	198.2	28.2	234.2	70.4	334.3	1.5
2017	46	91	Kankakee	21	Central	Mostly Urban	24.5	136008	103	7	396	126	530	1	75.7	5.1	291.2	92.6	389.7	0.7
2017	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	162539	584	10	253	129	393	1	359.3	6.2	155.7	79.4	241.8	0.6
2017	48	95	Knox	9	Central	Mostly Urban	24.3	60691	136	10	228	32	273	3	224.1	16.5	375.7	52.7	449.8	4.9
2017	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	874846	663	486	1297	726	8663	156	75.8	55.6	148.3	83	990.2	17.8
2017	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	133280	130	14	474	31	529	10	97.5	10.5	355.6	23.3	396.9	7.5
2017	51	101	Lawrence	2	Southern	Mostly Rural	58	19053	136	1	82	80	167	4	713.8	5.2	430.4	419.9	876.5	21
2017	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	41423	367	30	177	87	326	32	886	72.4	427.3	210	787	77.3
2017	53	105	Livingston	11	Central	Mostly Urban	40.8	43933	582	26	219	23	269	1	1324.7	59.2	498.5	52.4	612.3	2.3
2017	54	107	Logan	11	Central	Mostly Urban	39.9	34635	577	24	160	77	262	1	1665.9	69.3	462	222.3	756.5	2.9
2017	55	109	McDonough	9	Central	Mostly Urban	29.5	35614	93	4	98	8	110	0	261.1	11.2	275.2	22.5	308.9	0
2017	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	381167	174	53	484	128	686	21	45.6	13.9	127	33.6	180	5.5
2017	57	113	McLean	11	Central	Mostly Urban	16.5	210330	400	0	874	166	1042	2	190.2	0	415.5	78.9	495.4	1
2017	58	115	Macon	6	Central	Mostly Urban	15.3	129016	529	2	943	287	1232	0	410	1.6	730.9	222.5	954.9	0
2017	59	117	Macoupin	7	Central	Mostly Rural	58.5	55227	204	122	281	101	508	4	369.4	220.9	508.8	182.9	919.8	7.2
2017	60	119	Madison	3	Southern	Mostly Urban	13.3	323850	1110	86	1331	210	1627	0	342.8	26.6	411	64.8	502.4	0
2017	61	121	Marion	4	Southern	Mostly Urban	45.1	46517	191	142	411	211	782	18	410.6	305.3	883.5	453.6	1681.1	38.7
2017	62	123	Marshall	10	Central	Completely Rural	100	14028	60	4	37	15	56	0	427.7	28.5	263.8	106.9	399.2	0
2017	63	125	Mason	8	Central	Mostly Rural	77.5	16519	41	31	79	58	171	3	248.2	187.7	478.2	351.1	1035.2	18.2
2017	64	127	Massac	1	Southern	Mostly Rural	50.5	17496	303	33	128	38	215	16	1731.8	188.6	731.6	217.2	1228.9	91.4
2017	65	129	Menard	8	Central	Mostly Rural	75.7	15052	74	7	37	14	63	5	491.6	46.5	245.8	93	418.5	33.2
2017	66	131	Mercer	14	Central	Mostly Rural	77.8	18962	40	0	72	29	101	0	210.9	0	379.7	152.9	532.6	0
2017	67	133	Monroe	20	Southern	Mostly Urban	41.4	41903	134	0	141	3	145	1	319.8	0	336.5	7.2	346	2.4
2017	68	135	Montgomery	4	Central	Mostly Urban	41.6	34622	177	113	167	210	490	0	511.2	326.4	482.4	606.6	1415.3	0
2017	69	137	Morgan	7	Central	Mostly Urban	36.2	40859	128	57	155	131	363	20	313.3	139.5	379.4	320.6	888.4	48.9
2017	70	139	Moultrie	6	Central	Mostly Rural	69.2	18482	43	23	58	29	141	31	232.7	124.4	313.8	156.9	762.9	167.7
2017	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	62605	559	24	156	77	260	3	892.9	38.3	249.2	123	415.3	4.8
2017	72	143	Peoria	10	Central	Mostly Urban	14.6	226195	2168	117	936	345	1419	21	958.5	51.7	413.8	152.5	627.3	9.3
2017	73	145	Perry	20	Southern	Mostly Urban	43.6	25427	137	0	78	13	93	2	538.8	0	306.8	51.1	365.8	7.9
2017	74	147	Piatt	6	Central	Mostly Rural	67.7	20118	43	14	47	97	160	2	213.7	69.6	233.6	482.2	795.3	9.9
2017	75	149	Pike	8	Central	Mostly Rural	72.3	19162	115	29	136	57	242	20	600.1	151.3	709.7	297.5	1262.9	104.4
2017	76	151	Pope	1	Southern	Completely Rural	100	4729	12	3	29	7	42	3	253.8	63.4	613.2	148	888.1	63.4
2017	77	153	Pulaski	1	Southern	Completely Rural	100	6779	12	1	58	14	76	3	177	14.8	855.6	206.5	1121.1	44.3
2017	78	155	Putnam	10	Central	Completely Rural	100	6852	30	5	19	16	43	3	437.8	73	277.3	233.5	627.6	43.8
2017	79	157	Randolph	20	Southern	Mostly Urban	42.6	38537	118	0	107	3	110	0	306.2	0	277.7	7.8	285.4	0
2017	80	159	Richland	2	Southern	Mostly Urban	43.5	19445	24	9	65	51	127	2	123.4	46.3	334.3	262.3	653.1	10.3
2017	81	161	Rock Island	14	Central	Mostly Urban	10.9	175888	743	655	636	238	1568	39	422.4	372.4	361.6	135.3	891.5	22.2
2017	82	163	St. Clair	20	Southern	Mostly Urban	9.8	324937	565	33	1713	176	1926	4	173.9	10.2	527.2	54.2	592.7	1.2
2017	83	165	Saline	1	Southern	Mostly Urban	43.7	29189	126	36	304	154	506	12	431.7	123.3	1041.5	527.6	1733.5	41.1
2017	84	167	Sangamon	7	Central	Mostly Urban	14.1	241375	1279	96	829	220	1149	4	529.9	39.8	343.4	91.1	476	1.7
2017	85	169	Schuyler	8	Central	Mostly Rural	57.6	8297	58	26	46	29	106	5	699	313.4	554.4	349.5	1277.6	60.3
2017	86	171	Scott	7	Central	Completely Rural	100	6050	7	0	23	39	62	0	115.7	0	380.2	644.6	1024.8	0
2017	87	173	Shelby	4	Central	Mostly Rural	77.7	26379	101	20	83	47	153	3	382.9	75.8	314.6	178.2	580	11.4
2017	88	175	Stark	10	Central	Completely Rural	100	6656	31	7	17	4	28	0	465.7	105.2	255.4	60.1	420.7	0
2017	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	54696	1029	47	272	147	470	4	1881.3	85.9	497.3	268.8	859.3	7.3
2017	90	179	Tazewell	10	Central	Mostly Urban	20.4	164066	974	113	318	113	544	0	593.7	68.9	193.8	68.9	331.6	0
2017	91	181	Union	1	Southern	Mostly Rural	65.9	20573	46	29	111	74	220	6	223.6	141	539.5	359.7	1069.4	29.2
2017	92	183	Vermilion	5	Central	Mostly Urban	31.3	96240	161	76	595	125	814	18	167.3	79	618.2	129.9	845.8	18.7
2017	93	185	Wabash	2	Southern	Mostly Urban	38.9	13991	35	7	95	30	133	1	250.2	50	679	214.4	950.6	7.1
2017	94	187	Warren	9	Central	Mostly Urban	45.5	20901	21	2	44	7	57	4	100.5	9.6	210.5	33.5	272.7	19.1
2017	95	189	Washington	20	Southern	Mostly Rural	73.6	16932	81	4	42	4	50	0	478.4	23.6	248.1	23.6	295.3	0
2017	96	191	Wayne	2	Southern	Mostly Rural	69.9	20176	51	22	88	42	161	9	252.8	109	436.2	208.2	798	44.6
2017	97	193	White	2	Southern	Mostly Rural	62	16980	77	1	96	31	136	8	453.5	5.9	565.4	182.6	800.9	47.1
2017	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	68452	380	129	292	104	552	27	555.1	188.5	426.6	151.9	806.4	39.4
2017	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	865156	562	186	1507	220	1913	0	65	21.5	174.2	25.4	221.1	0
2017	100	199	Williamson	1	Southern	Mostly Urban	34.8	81749	136	94	364	135	691	98	166.4	115	445.3	165.1	845.3	119.9
2017	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	351619	5348	147	2002	509	2669	11	1521	41.8	569.4	144.8	759.1	3.1
2017	102	203	Woodford	11	Central	Mostly Rural	54.9	48065	852	36	151	74	266	5	1772.6	74.9	314.2	154	553.4	10.4
2018	1	1	Adams	8	Central	Mostly Urban	32.6	80368	148	48	542	80	671	1	184.2	59.7	674.4	99.5	834.9	1.2
2018	2	3	Alexander	1	Southern	Mostly Rural	61.9	7425	25	1	51	11	68	5	336.7	13.5	686.9	148.1	915.8	67.3
2018	3	5	Bond	3	Southern	Mostly Rural	60.7	19909	105	25	136	56	237	20	527.4	125.6	683.1	281.3	1190.4	100.5
2018	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	66624	464	62	205	99	381	15	696.4	93.1	307.7	148.6	571.9	22.5
2018	5	9	Brown	8	Central	Mostly Urban	41.1	7622	21	26	19	13	62	4	275.5	341.1	249.3	170.6	813.4	52.5
2018	6	11	Bureau	13	Central	Mostly Rural	57.4	40000	56	3	107	34	145	1	140	7.5	267.5	85	362.5	2.5
2018	7	13	Calhoun	8	Southern	Completely Rural	100	5821	14	2	14	5	27	6	240.5	34.4	240.5	85.9	463.8	103.1
2018	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	17115	193	13	63	25	104	3	1127.7	76	368.1	146.1	607.7	17.5
2018	9	17	Cass	8	Central	Mostly Rural	52.1	15351	172	27	91	39	159	2	1120.4	175.9	592.8	254.1	1035.8	13
2018	10	19	Champaign	6	Central	Mostly Urban	12.7	249932	419	122	904	209	1288	53	167.6	48.8	361.7	83.6	515.3	21.2
2018	11	21	Christian	4	Central	Mostly Urban	43.5	39359	89	74	189	90	370	17	226.1	188	480.2	228.7	940.1	43.2
2018	12	23	Clark	5	Southern	Mostly Rural	59.5	19131	82	5	89	24	125	7	428.6	26.1	465.2	125.5	653.4	36.6
2018	13	25	Clay	4	Southern	Mostly Rural	64.7	16297	65	42	120	50	229	17	398.8	257.7	736.3	306.8	1405.2	104.3
2018	14	27	Clinton	4	Southern	Mostly Urban	48.8	45656	159	23	118	60	205	4	348.3	50.4	258.5	131.4	449	8.8
2018	15	29	Coles	5	Central	Mostly Urban	24.3	60142	643	41	516	148	716	11	1069.1	68.2	858	246.1	1190.5	18.3
2018	16	31	Cook	co	Northern - Cook	Completely Urban	0	6299428	2949	3727	17652	5183	27715	1153	46.8	59.2	280.2	82.3	440	18.3
2018	17	33	Crawford	2	Southern	Mostly Rural	60.2	22583	75	8	101	12	123	2	332.1	35.4	447.2	53.1	544.7	8.9
2018	18	35	Cumberland	5	Southern	Completely Rural	100	13187	61	10	59	14	86	3	462.6	75.8	447.4	106.2	652.2	22.7
2018	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	127013	912	0	318	91	409	0	718	0	250.4	71.6	322	0
2018	20	39	De Witt	6	Central	Mostly Urban	48.8	19129	166	43	52	24	136	17	867.8	224.8	271.8	125.5	711	88.9
2018	21	41	Douglas	6	Central	Mostly Rural	61.6	24329	125	56	69	28	174	21	513.8	230.2	283.6	115.1	715.2	86.3
2018	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1138296	2240	488	1757	517	2943	181	196.8	42.9	154.4	45.4	258.5	15.9
2018	23	45	Edgar	5	Central	Mostly Rural	51.8	20927	61	1	145	23	169	0	291.5	4.8	692.9	109.9	807.6	0
2018	24	47	Edwards	2	Southern	Completely Rural	100	7844	35	12	50	12	76	2	446.2	153	637.4	153	968.9	25.5
2018	25	49	Effingham	4	Southern	Mostly Rural	59.7	42376	276	91	220	80	457	66	651.3	214.7	519.2	188.8	1078.4	155.7
2018	26	51	Fayette	4	Southern	Mostly Rural	67	25877	206	88	176	52	324	8	796.1	340.1	680.1	201	1252.1	30.9
2018	27	53	Ford	11	Central	Mostly Urban	41.8	16241	52	73	89	84	308	62	320.2	449.5	548	517.2	1896.4	381.7
2018	28	55	Franklin	2	Southern	Mostly Urban	48.6	47349	156	5	540	160	706	1	329.5	10.6	1140.5	337.9	1491.1	2.1
2018	29	57	Fulton	9	Central	Mostly Rural	60	41620	41	9	119	35	165	2	98.5	21.6	285.9	84.1	396.4	4.8
2018	30	59	Gallatin	2	Southern	Completely Rural	100	6101	5	2	36	11	49	0	82	32.8	590.1	180.3	803.1	0
2018	31	61	Greene	7	Central	Mostly Rural	70.8	15829	96	3	110	120	235	2	606.5	19	694.9	758.1	1484.6	12.6
2018	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63930	98	3	165	27	197	2	153.3	4.7	258.1	42.2	308.1	3.1
2018	33	65	Hamilton	2	Southern	Mostly Rural	68.1	9942	18	5	51	13	70	1	181.1	50.3	513	130.8	704.1	10.1
2018	34	67	Hancock	9	Central	Mostly Rural	71	21552	56	2	77	10	93	4	259.8	9.3	357.3	46.4	431.5	18.6
2018	35	69	Hardin	2	Southern	Completely Rural	100	4571	6	1	39	5	45	0	131.3	21.9	853.2	109.4	984.5	0
2018	36	71	Henderson	9	Central	Mostly Rural	99.7	7941	28	3	17	2	22	0	352.6	37.8	214.1	25.2	277	0
2018	37	73	Henry	14	Central	Mostly Rural	50.3	60020	353	8	164	23	196	1	588.1	13.3	273.2	38.3	326.6	1.7
2018	38	75	Iroquois	21	Central	Mostly Rural	71.7	33411	38	3	157	26	186	0	113.7	9	469.9	77.8	556.7	0
2018	39	77	Jackson	1	Southern	Mostly Urban	37.2	67935	86	82	330	121	547	14	126.6	120.7	485.8	178.1	805.2	20.6
2018	40	79	Jasper	4	Southern	Mostly Rural	69.9	11786	1	20	57	66	149	6	8.5	169.7	483.6	560	1264.2	50.9
2018	41	81	Jefferson	2	Southern	Mostly Rural	58.8	46035	152	9	304	25	349	11	330.2	19.6	660.4	54.3	758.1	23.9
2018	42	83	Jersey	7	Southern	Mostly Rural	60.6	26204	59	5	55	9	69	0	225.2	19.1	209.9	34.3	263.3	0
2018	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	25393	66	46	47	25	125	7	259.9	181.2	185.1	98.5	492.3	27.6
2018	44	87	Johnson	1	Southern	Completely Rural	100	14663	40	8	50	43	105	4	272.8	54.6	341	293.3	716.1	27.3
2018	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	668737	1325	205	1527	447	2188	9	198.1	30.7	228.3	66.8	327.2	1.3
2018	46	91	Kankakee	21	Central	Mostly Urban	24.5	134880	103	6	355	99	462	2	76.4	4.4	263.2	73.4	342.5	1.5
2018	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	164020	532	5	299	129	433	0	324.4	3	182.3	78.6	264	0
2018	48	95	Knox	9	Central	Mostly Urban	24.3	59919	109	6	239	35	282	2	181.9	10	398.9	58.4	470.6	3.3
2018	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	869687	574	413	1314	597	2480	156	66	47.5	151.1	68.6	285.2	17.9
2018	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	132642	180	13	431	23	467	0	135.7	9.8	324.9	17.3	352.1	0
2018	51	101	Lawrence	2	Southern	Mostly Rural	58	18768	145	6	56	85	151	4	772.6	32	298.4	452.9	804.6	21.3
2018	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	41045	372	26	181	54	294	33	906.3	63.3	441	131.6	716.3	80.4
2018	53	105	Livingston	11	Central	Mostly Urban	40.8	43399	619	25	186	26	239	2	1426.3	57.6	428.6	59.9	550.7	4.6
2018	54	107	Logan	11	Central	Mostly Urban	39.9	34470	515	22	153	65	240	0	1494.1	63.8	443.9	188.6	696.3	0
2018	55	109	McDonough	9	Central	Mostly Urban	29.5	35268	66	5	92	14	112	1	187.1	14.2	260.9	39.7	317.6	2.8
2018	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	380546	184	48	548	124	748	28	48.4	12.6	144	32.6	196.6	7.4
2018	57	113	McLean	11	Central	Mostly Urban	16.5	209523	389	0	712	201	916	3	185.7	0	339.8	95.9	437.2	1.4
2018	58	115	Macon	6	Central	Mostly Urban	15.3	127739	488	1	1010	306	1317	0	382	0.8	790.7	239.6	1031	0
2018	59	117	Macoupin	7	Central	Mostly Rural	58.5	54970	188	73	280	118	476	5	342	132.8	509.4	214.7	865.9	9.1
2018	60	119	Madison	3	Southern	Mostly Urban	13.3	322256	1056	77	1458	232	1768	1	327.7	23.9	452.4	72	548.6	0.3
2018	61	121	Marion	4	Southern	Mostly Urban	45.1	46181	201	100	397	95	625	33	435.2	216.5	859.7	205.7	1353.4	71.5
2018	62	123	Marshall	10	Central	Completely Rural	100	13780	58	10	36	13	59	0	420.9	72.6	261.2	94.3	428.2	0
2018	63	125	Mason	8	Central	Mostly Rural	77.5	16324	50	24	76	58	163	5	306.3	147	465.6	355.3	998.5	30.6
2018	64	127	Massac	1	Southern	Mostly Rural	50.5	17145	379	26	141	61	245	17	2210.6	151.6	822.4	355.8	1429	99.2
2018	65	129	Menard	8	Central	Mostly Rural	75.7	14999	97	7	26	15	53	5	646.7	46.7	173.3	100	353.4	33.3
2018	66	131	Mercer	14	Central	Mostly Rural	77.8	18905	32	0	61	23	84	0	169.3	0	322.7	121.7	444.3	0
2018	67	133	Monroe	20	Southern	Mostly Urban	41.4	42047	149	0	159	6	165	0	354.4	0	378.1	14.3	392.4	0
2018	68	135	Montgomery	4	Central	Mostly Urban	41.6	34491	134	111	175	195	481	0	388.5	321.8	507.4	565.4	1394.6	0
2018	69	137	Morgan	7	Central	Mostly Urban	36.2	40577	122	78	188	142	432	24	300.7	192.2	463.3	350	1064.6	59.1
2018	70	139	Moultrie	6	Central	Mostly Rural	69.2	18395	64	28	58	36	151	29	347.9	152.2	315.3	195.7	820.9	157.7
2018	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	62204	466	37	160	62	261	2	749.1	59.5	257.2	99.7	419.6	3.2
2018	72	143	Peoria	10	Central	Mostly Urban	14.6	223736	1815	78	937	349	1385	21	811.2	34.9	418.8	156	619	9.4
2018	73	145	Perry	20	Southern	Mostly Urban	43.6	25260	142	2	103	12	118	1	562.2	7.9	407.8	47.5	467.1	4
2018	74	147	Piatt	6	Central	Mostly Rural	67.7	20036	44	15	52	111	186	8	219.6	74.9	259.5	554	928.3	39.9
2018	75	149	Pike	8	Central	Mostly Rural	72.3	19106	119	33	139	53	251	26	622.8	172.7	727.5	277.4	1313.7	136.1
2018	76	151	Pope	1	Southern	Completely Rural	100	4709	12	4	31	9	50	6	254.8	84.9	658.3	191.1	1061.8	127.4
2018	77	153	Pulaski	1	Southern	Completely Rural	100	6600	20	1	42	10	55	2	303	15.2	636.4	151.5	833.3	30.3
2018	78	155	Putnam	10	Central	Completely Rural	100	6890	41	4	14	8	28	2	595.1	58.1	203.2	116.1	406.4	29
2018	79	157	Randolph	20	Southern	Mostly Urban	42.6	38376	131	0	110	4	114	0	341.4	0	286.6	10.4	297.1	0
2018	80	159	Richland	2	Southern	Mostly Urban	43.5	19308	16	9	81	53	146	3	82.9	46.6	419.5	274.5	756.2	15.5
2018	81	161	Rock Island	14	Central	Mostly Urban	10.9	174220	746	562	679	261	1540	38	428.2	322.6	389.7	149.8	883.9	21.8
2018	82	163	St. Clair	20	Southern	Mostly Urban	9.8	323102	547	20	1537	174	1737	6	169.3	6.2	475.7	53.9	537.6	1.9
2018	83	165	Saline	1	Southern	Mostly Urban	43.7	28899	137	36	340	181	597	40	474.1	124.6	1176.5	626.3	2065.8	138.4
2018	84	167	Sangamon	7	Central	Mostly Urban	14.1	239327	1282	75	864	251	1194	4	535.7	31.3	361	104.9	498.9	1.7
2018	85	169	Schuyler	8	Central	Mostly Rural	57.6	8147	68	24	39	25	91	3	834.7	294.6	478.7	306.9	1117	36.8
2018	86	171	Scott	7	Central	Completely Rural	100	6022	11	0	29	48	77	0	182.7	0	481.6	797.1	1278.6	0
2018	87	173	Shelby	4	Central	Mostly Rural	77.7	26283	119	7	70	35	113	1	452.8	26.6	266.3	133.2	429.9	3.8
2018	88	175	Stark	10	Central	Completely Rural	100	6580	25	5	20	8	33	0	379.9	76	304	121.6	501.5	0
2018	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	54311	1140	50	278	97	427	2	2099	92.1	511.9	178.6	786.2	3.7
2018	90	179	Tazewell	10	Central	Mostly Urban	20.4	162472	935	111	385	99	598	3	575.5	68.3	237	60.9	368.1	1.8
2018	91	181	Union	1	Southern	Mostly Rural	65.9	20413	46	32	134	56	232	10	225.3	156.8	656.4	274.3	1136.5	49
2018	92	183	Vermilion	5	Central	Mostly Urban	31.3	94786	140	83	567	121	782	11	147.7	87.6	598.2	127.7	825	11.6
2018	93	185	Wabash	2	Southern	Mostly Urban	38.9	13932	36	9	124	27	161	1	258.4	64.6	890	193.8	1155.6	7.2
2018	94	187	Warren	9	Central	Mostly Urban	45.5	20659	25	0	50	3	58	5	121	0	242	14.5	280.7	24.2
2018	95	189	Washington	20	Southern	Mostly Rural	73.6	17006	73	1	48	4	53	0	429.3	5.9	282.3	23.5	311.7	0
2018	96	191	Wayne	2	Southern	Mostly Rural	69.9	20004	62	22	105	37	168	4	309.9	110	524.9	185	839.8	20
2018	97	193	White	2	Southern	Mostly Rural	62	16637	81	3	125	29	166	9	486.9	18	751.3	174.3	997.8	54.1
2018	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	67780	377	120	307	83	522	12	556.2	177	452.9	122.5	770.1	17.7
2018	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	862876	498	125	1374	211	1726	16	57.7	14.5	159.2	24.5	200	1.9
2018	100	199	Williamson	1	Southern	Mostly Urban	34.8	81662	108	85	363	113	647	86	132.3	104.1	444.5	138.4	792.3	105.3
2018	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	349972	3866	137	1944	498	2596	17	1104.7	39.1	555.5	142.3	741.8	4.9
2018	102	203	Woodford	11	Central	Mostly Rural	54.9	47742	851	34	173	71	285	7	1782.5	71.2	362.4	148.7	597	14.7
2019	1	1	Adams	8	Central	Mostly Urban	32.6	80147	166	41	592	68	707	6	207.1	51.2	738.6	84.8	882.1	7.5
2019	2	3	Alexander	1	Southern	Mostly Rural	61.9	7065	30	1	49	9	65	6	424.6	14.2	693.6	127.4	920	84.9
2019	3	5	Bond	3	Southern	Mostly Rural	60.7	19590	126	16	153	40	225	16	643.2	81.7	781	204.2	1148.5	81.7
2019	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	66341	495	55	212	55	329	7	746.1	82.9	319.6	82.9	495.9	10.6
2019	5	9	Brown	8	Central	Mostly Urban	41.1	7674	21	5	22	15	42	0	273.7	65.2	286.7	195.5	547.3	0
2019	6	11	Bureau	13	Central	Mostly Rural	57.4	39483	62	3	109	26	140	2	157	7.6	276.1	65.9	354.6	5.1
2019	7	13	Calhoun	8	Southern	Completely Rural	100	5689	24	2	15	2	21	2	421.9	35.2	263.7	35.2	369.1	35.2
2019	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	17092	150	13	68	17	101	3	877.6	76.1	397.8	99.5	590.9	17.6
2019	9	17	Cass	8	Central	Mostly Rural	52.1	15104	158	31	80	33	150	6	1046.1	205.2	529.7	218.5	993.1	39.7
2019	10	19	Champaign	6	Central	Mostly Urban	12.7	249082	467	132	1030	238	1473	73	187.5	53	413.5	95.6	591.4	29.3
2019	11	21	Christian	4	Central	Mostly Urban	43.5	38974	118	71	208	96	383	8	302.8	182.2	533.7	246.3	982.7	20.5
2019	12	23	Clark	5	Southern	Mostly Rural	59.5	18932	63	10	115	37	170	8	332.8	52.8	607.4	195.4	898	42.3
2019	13	25	Clay	4	Southern	Mostly Rural	64.7	16158	54	23	97	42	181	19	334.2	142.3	600.3	259.9	1120.2	117.6
2019	14	27	Clinton	4	Southern	Mostly Urban	48.8	45339	195	29	108	52	192	3	430.1	64	238.2	114.7	423.5	6.6
2019	15	29	Coles	5	Central	Mostly Urban	24.3	59873	528	30	556	147	740	7	881.9	50.1	928.6	245.5	1235.9	11.7
2019	16	31	Cook	co	Northern - Cook	Completely Urban	0	6257092	2654	3752	19562	6072	30856	1470	42.4	60	312.6	97	493.1	23.5
2019	17	33	Crawford	2	Southern	Mostly Rural	60.2	22396	68	5	78	12	96	1	303.6	22.3	348.3	53.6	428.6	4.5
2019	18	35	Cumberland	5	Southern	Completely Rural	100	13128	79	2	53	12	70	3	601.8	15.2	403.7	91.4	533.2	22.9
2019	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	127640	806	0	287	71	358	0	631.5	0	224.9	55.6	280.5	0
2019	20	39	De Witt	6	Central	Mostly Urban	48.8	18916	140	36	66	29	138	7	740.1	190.3	348.9	153.3	729.5	37
2019	21	41	Douglas	6	Central	Mostly Rural	61.6	24242	132	61	88	40	203	14	544.5	251.6	363	165	837.4	57.8
2019	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1130417	2167	440	1774	524	2905	167	191.7	38.9	156.9	46.4	257	14.8
2019	23	45	Edgar	5	Central	Mostly Rural	51.8	20645	71	1	140	24	165	0	343.9	4.8	678.1	116.3	799.2	0
2019	24	47	Edwards	2	Southern	Completely Rural	100	7870	35	15	49	19	84	1	444.7	190.6	622.6	241.4	1067.3	12.7
2019	25	49	Effingham	4	Southern	Mostly Rural	59.7	42245	417	22	240	60	355	33	987.1	52.1	568.1	142	840.3	78.1
2019	26	51	Fayette	4	Southern	Mostly Rural	67	25768	129	61	202	37	310	10	500.6	236.7	783.9	143.6	1203	38.8
2019	27	53	Ford	11	Central	Mostly Urban	41.8	15902	47	75	100	71	278	32	295.6	471.6	628.9	446.5	1748.2	201.2
2019	28	55	Franklin	2	Southern	Mostly Urban	48.6	47027	275	2	457	108	568	1	584.8	4.3	971.8	229.7	1207.8	2.1
2019	29	57	Fulton	9	Central	Mostly Rural	60	40903	35	7	117	24	149	1	85.6	17.1	286	58.7	364.3	2.4
2019	30	59	Gallatin	2	Southern	Completely Rural	100	5790	5	1	49	7	57	0	86.4	17.3	846.3	120.9	984.5	0
2019	31	61	Greene	7	Central	Mostly Rural	70.8	15693	103	0	101	89	192	2	656.3	0	643.6	567.1	1223.5	12.7
2019	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63811	80	0	172	21	195	2	125.4	0	269.5	32.9	305.6	3.1
2019	33	65	Hamilton	2	Southern	Mostly Rural	68.1	9910	31	3	42	13	59	1	312.8	30.3	423.8	131.2	595.4	10.1
2019	34	67	Hancock	9	Central	Mostly Rural	71	21403	45	3	70	8	83	2	210.3	14	327.1	37.4	387.8	9.3
2019	35	69	Hardin	2	Southern	Completely Rural	100	4514	3	1	32	3	36	0	66.5	22.2	708.9	66.5	797.5	0
2019	36	71	Henderson	9	Central	Mostly Rural	99.7	7928	38	2	31	1	35	1	479.3	25.2	391	12.6	441.5	12.6
2019	37	73	Henry	14	Central	Mostly Rural	50.3	59753	583	9	143	18	170	0	975.7	15.1	239.3	30.1	284.5	0
2019	38	75	Iroquois	21	Central	Mostly Rural	71.7	32974	33	2	174	20	196	0	100.1	6.1	527.7	60.7	594.4	0
2019	39	77	Jackson	1	Southern	Mostly Urban	37.2	67316	76	34	363	142	552	13	112.9	50.5	539.2	210.9	820	19.3
2019	40	79	Jasper	4	Southern	Mostly Rural	69.9	11823	1	25	79	42	157	11	8.5	211.5	668.2	355.2	1327.9	93
2019	41	81	Jefferson	2	Southern	Mostly Rural	58.8	46000	110	13	369	40	449	27	239.1	28.3	802.2	87	976.1	58.7
2019	42	83	Jersey	7	Southern	Mostly Rural	60.6	26100	117	20	174	48	251	9	448.3	76.6	666.7	183.9	961.7	34.5
2019	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	25206	58	34	48	40	134	12	230.1	134.9	190.4	158.7	531.6	47.6
2019	44	87	Johnson	1	Southern	Completely Rural	100	14653	47	6	58	44	113	5	320.8	40.9	395.8	300.3	771.2	34.1
2019	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	665419	1207	188	1595	435	2231	13	181.4	28.3	239.7	65.4	335.3	2
2019	46	91	Kankakee	21	Central	Mostly Urban	24.5	134309	109	0	412	122	534	0	81.2	0	306.8	90.8	397.6	0
2019	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	165178	567	1	316	139	456	0	343.3	0.6	191.3	84.2	276.1	0
2019	48	95	Knox	9	Central	Mostly Urban	24.3	59587	105	8	253	31	294	2	176.2	13.4	424.6	52	493.4	3.4
2019	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	863498	685	317	1246	482	2187	142	79.3	36.7	144.3	55.8	253.3	16.4
2019	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	131592	180	5	401	39	450	5	136.8	3.8	304.7	29.6	342	3.8
2019	51	101	Lawrence	2	Southern	Mostly Rural	58	18634	179	7	103	11	121	0	960.6	37.6	552.8	59	649.4	0
2019	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	40738	462	23	174	50	286	39	1134.1	56.5	427.1	122.7	702	95.7
2019	53	105	Livingston	11	Central	Mostly Urban	40.8	43222	713	24	176	21	223	2	1649.6	55.5	407.2	48.6	515.9	4.6
2019	54	107	Logan	11	Central	Mostly Urban	39.9	34142	570	17	154	67	238	0	1669.5	49.8	451.1	196.2	697.1	0
2019	55	109	McDonough	9	Central	Mostly Urban	29.5	34905	47	0	82	11	93	0	134.7	0	234.9	31.5	266.4	0
2019	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	378686	264	60	565	127	779	27	69.7	15.8	149.2	33.5	205.7	7.1
2019	57	113	McLean	11	Central	Mostly Urban	16.5	207729	375	1	626	248	875	0	180.5	0.5	301.4	119.4	421.2	0
2019	58	115	Macon	6	Central	Mostly Urban	15.3	127150	542	5	1044	251	1300	0	426.3	3.9	821.1	197.4	1022.4	0
2019	59	117	Macoupin	7	Central	Mostly Rural	58.5	54572	187	42	288	101	442	11	342.7	77	527.7	185.1	809.9	20.2
2019	60	119	Madison	3	Southern	Mostly Urban	13.3	320790	1064	51	1466	213	1730	0	331.7	15.9	457	66.4	539.3	0
2019	61	121	Marion	4	Southern	Mostly Urban	45.1	45978	195	84	379	78	582	41	424.1	182.7	824.3	169.6	1265.8	89.2
2019	62	123	Marshall	10	Central	Completely Rural	100	13784	42	6	30	9	46	1	304.7	43.5	217.6	65.3	333.7	7.3
2019	63	125	Mason	8	Central	Mostly Rural	77.5	16170	40	22	60	41	123	0	247.4	136.1	371.1	253.6	760.7	0
2019	64	127	Massac	1	Southern	Mostly Rural	50.5	16751	336	14	178	49	247	6	2005.9	83.6	1062.6	292.5	1474.5	35.8
2019	65	129	Menard	8	Central	Mostly Rural	75.7	14831	85	7	21	12	43	3	573.1	47.2	141.6	80.9	289.9	20.2
2019	66	131	Mercer	14	Central	Mostly Rural	77.8	18761	26	0	66	17	83	0	138.6	0	351.8	90.6	442.4	0
2019	67	133	Monroe	20	Southern	Mostly Urban	41.4	42417	180	1	207	5	213	0	424.4	2.4	488	11.8	502.2	0
2019	68	135	Montgomery	4	Central	Mostly Urban	41.6	34102	183	108	202	162	472	0	536.6	316.7	592.3	475	1384.1	0
2019	69	137	Morgan	7	Central	Mostly Urban	36.2	40033	131	80	193	114	418	31	327.2	199.8	482.1	284.8	1044.1	77.4
2019	70	139	Moultrie	6	Central	Mostly Rural	69.2	18127	84	29	68	33	157	27	463.4	160	375.1	182	866.1	148.9
2019	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	61973	398	33	153	90	277	1	642.2	53.2	246.9	145.2	447	1.6
2019	72	143	Peoria	10	Central	Mostly Urban	14.6	221921	1905	96	959	367	1436	14	858.4	43.3	432.1	165.4	647.1	6.3
2019	73	145	Perry	20	Southern	Mostly Urban	43.6	24976	130	1	132	13	148	2	520.5	4	528.5	52	592.6	8
2019	74	147	Piatt	6	Central	Mostly Rural	67.7	20005	54	9	55	114	179	1	269.9	45	274.9	569.9	894.8	5
2019	75	149	Pike	8	Central	Mostly Rural	72.3	19081	134	26	159	61	278	32	702.3	136.3	833.3	319.7	1456.9	167.7
2019	76	151	Pope	1	Southern	Completely Rural	100	4684	19	8	32	16	62	6	405.6	170.8	683.2	341.6	1323.7	128.1
2019	77	153	Pulaski	1	Southern	Completely Rural	100	6440	9	1	32	14	49	2	139.8	15.5	496.9	217.4	760.9	31.1
2019	78	155	Putnam	10	Central	Completely Rural	100	6882	40	2	10	9	21	0	581.2	29.1	145.3	130.8	305.1	0
2019	79	157	Randolph	20	Southern	Mostly Urban	42.6	37760	142	0	120	10	130	0	376.1	0	317.8	26.5	344.3	0
2019	80	159	Richland	2	Southern	Mostly Urban	43.5	19016	22	12	106	44	162	0	115.7	63.1	557.4	231.4	851.9	0
2019	81	161	Rock Island	14	Central	Mostly Urban	10.9	173339	716	479	764	261	1539	35	413.1	276.3	440.8	150.6	887.9	20.2
2019	82	163	St. Clair	20	Southern	Mostly Urban	9.8	320586	628	16	1769	168	1964	11	195.9	5	551.8	52.4	612.6	3.4
2019	83	165	Saline	1	Southern	Mostly Urban	43.7	28562	143	26	314	117	491	34	500.7	91	1099.4	409.6	1719.1	119
2019	84	167	Sangamon	7	Central	Mostly Urban	14.1	237811	1111	50	824	233	1111	4	467.2	21	346.5	98	467.2	1.7
2019	85	169	Schuyler	8	Central	Mostly Rural	57.6	8069	62	23	43	16	83	1	768.4	285	532.9	198.3	1028.6	12.4
2019	86	171	Scott	7	Central	Completely Rural	100	6011	18	0	39	37	76	0	299.5	0	648.8	615.5	1264.3	0
2019	87	173	Shelby	4	Central	Mostly Rural	77.7	26188	114	6	70	15	94	3	435.3	22.9	267.3	57.3	358.9	11.5
2019	88	175	Stark	10	Central	Completely Rural	100	6460	43	3	19	7	29	0	665.6	46.4	294.1	108.4	448.9	0
2019	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	53832	1001	40	303	91	439	5	1859.5	74.3	562.9	169	815.5	9.3
2019	90	179	Tazewell	10	Central	Mostly Urban	20.4	161487	911	76	388	120	588	4	564.1	47.1	240.3	74.3	364.1	2.5
2019	91	181	Union	1	Southern	Mostly Rural	65.9	20224	42	25	124	50	217	18	207.7	123.6	613.1	247.2	1073	89
2019	92	183	Vermilion	5	Central	Mostly Urban	31.3	93418	98	58	483	152	700	7	104.9	62.1	517	162.7	749.3	7.5
2019	93	185	Wabash	2	Southern	Mostly Urban	38.9	13875	40	7	128	32	168	1	288.3	50.5	922.5	230.6	1210.8	7.2
2019	94	187	Warren	9	Central	Mostly Urban	45.5	20410	40	2	57	3	65	3	196	9.8	279.3	14.7	318.5	14.7
2019	95	189	Washington	20	Southern	Mostly Rural	73.6	16865	78	1	55	7	65	2	462.5	5.9	326.1	41.5	385.4	11.9
2019	96	191	Wayne	2	Southern	Mostly Rural	69.9	19867	53	17	94	30	143	2	266.8	85.6	473.1	151	719.8	10.1
2019	97	193	White	2	Southern	Mostly Rural	62	16566	15	3	105	25	141	8	90.5	18.1	633.8	150.9	851.1	48.3
2019	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	67291	363	95	295	68	474	16	539.4	141.2	438.4	101.1	704.4	23.8
2019	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	859054	461	48	1260	226	1546	9	53.7	5.6	146.7	26.3	180	1
2019	100	199	Williamson	1	Southern	Mostly Urban	34.8	81081	150	80	337	112	603	74	185	98.7	415.6	138.1	743.7	91.3
2019	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	348336	4080	86	1895	378	2370	11	1171.3	24.7	544	108.5	680.4	3.2
2019	102	203	Woodford	11	Central	Mostly Rural	54.9	47546	883	31	163	85	279	0	1857.1	65.2	342.8	178.8	586.8	0
2020	1	1	Adams	8	Central	Mostly Urban	32.6	79341	149	43	567	57	670	3	187.8	54.2	714.6	71.8	844.5	3.8
2020	2	3	Alexander	1	Southern	Mostly Rural	61.9	6629	25	1	58	6	72	7	377.1	15.1	874.9	90.5	1086.1	105.6
2020	3	5	Bond	3	Southern	Mostly Rural	60.7	19326	138	9	126	22	171	14	714.1	46.6	652	113.8	884.8	72.4
2020	4	7	Boone	17	Northern - Other	Mostly Urban	19.4	65422	464	31	163	63	264	7	709.2	47.4	249.2	96.3	403.5	10.7
2020	5	9	Brown	8	Central	Mostly Urban	41.1	7603	19	4	20	7	31	0	249.9	52.6	263.1	92.1	407.7	0
2020	6	11	Bureau	13	Central	Mostly Rural	57.4	39076	47	2	151	26	179	0	120.3	5.1	386.4	66.5	458.1	0
2020	7	13	Calhoun	8	Southern	Completely Rural	100	5526	22	2	11	6	23	4	398.1	36.2	199.1	108.6	416.2	72.4
2020	8	15	Carroll	15	Northern - Other	Mostly Rural	81.9	17019	171	5	52	17	77	3	1004.8	29.4	305.5	99.9	452.4	17.6
2020	9	17	Cass	8	Central	Mostly Rural	52.1	14831	171	24	64	21	113	4	1153	161.8	431.5	141.6	761.9	27
2020	10	19	Champaign	6	Central	Mostly Urban	12.7	248655	438	101	913	198	1256	44	176.1	40.6	367.2	79.6	505.1	17.7
2020	11	21	Christian	4	Central	Mostly Urban	43.5	38514	104	55	187	69	319	8	270	142.8	485.5	179.2	828.3	20.8
2020	12	23	Clark	5	Southern	Mostly Rural	59.5	18665	40	9	81	17	108	1	214.3	48.2	434	91.1	578.6	5.4
2020	13	25	Clay	4	Southern	Mostly Rural	64.7	16062	45	22	92	35	166	17	280.2	137	572.8	217.9	1033.5	105.8
2020	14	27	Clinton	4	Southern	Mostly Urban	48.8	45323	221	22	84	39	154	9	487.6	48.5	185.3	86	339.8	19.9
2020	15	29	Coles	5	Central	Mostly Urban	24.3	59327	390	31	526	133	699	9	657.4	52.3	886.6	224.2	1178.2	15.2
2020	16	31	Cook	co	Northern - Cook	Completely Urban	0	6203325	1956	3108	19399	4847	28280	926	31.5	50.1	312.7	78.1	455.9	14.9
2020	17	33	Crawford	2	Southern	Mostly Rural	60.2	22196	69	6	87	7	100	0	310.9	27	392	31.5	450.5	0
2020	18	35	Cumberland	5	Southern	Completely Rural	100	13032	80	0	45	11	58	2	613.9	0	345.3	84.4	445.1	15.3
2020	19	37	DeKalb	23	Northern - Other	Mostly Urban	20.3	126686	575	0	273	71	344	0	453.9	0	215.5	56	271.5	0
2020	20	39	De Witt	6	Central	Mostly Urban	48.8	18593	121	28	50	14	101	9	650.8	150.6	268.9	75.3	543.2	48.4
2020	21	41	Douglas	6	Central	Mostly Rural	61.6	24280	168	54	84	35	187	14	691.9	222.4	346	144.2	770.2	57.7
2020	22	43	DuPage	18	Northern - Collar	Completely Urban	0	1122896	1908	426	1762	495	2848	165	169.9	37.9	156.9	44.1	253.6	14.7
2020	23	45	Edgar	5	Central	Mostly Rural	51.8	20180	52	5	134	25	164	0	257.7	24.8	664	123.9	812.7	0
2020	24	47	Edwards	2	Southern	Completely Rural	100	7808	21	15	50	16	82	1	269	192.1	640.4	204.9	1050.2	12.8
2020	25	49	Effingham	4	Southern	Mostly Rural	59.7	42175	329	17	240	46	338	35	780.1	40.3	569.1	109.1	801.4	83
2020	26	51	Fayette	4	Southern	Mostly Rural	67	25650	81	50	195	33	283	5	315.8	194.9	760.2	128.7	1103.3	19.5
2020	27	53	Ford	11	Central	Mostly Urban	41.8	15884	49	46	87	35	179	11	308.5	289.6	547.7	220.3	1126.9	69.3
2020	28	55	Franklin	2	Southern	Mostly Urban	48.6	46417	297	2	365	65	432	0	639.9	4.3	786.3	140	930.7	0
2020	29	57	Fulton	9	Central	Mostly Rural	60	40182	32	8	103	18	129	0	79.6	19.9	256.3	44.8	321	0
2020	30	59	Gallatin	2	Southern	Completely Rural	100	5755	10	1	47	5	53	0	173.8	17.4	816.7	86.9	920.9	0
2020	31	61	Greene	7	Central	Mostly Rural	70.8	15392	97	0	87	61	148	0	630.2	0	565.2	396.3	961.5	0
2020	32	63	Grundy	13	Northern - Other	Mostly Urban	24.4	63619	68	2	161	10	174	1	106.9	3.1	253.1	15.7	273.5	1.6
2020	33	65	Hamilton	2	Southern	Mostly Rural	68.1	9833	24	2	37	7	46	0	244.1	20.3	376.3	71.2	467.8	0
2020	34	67	Hancock	9	Central	Mostly Rural	71	21068	65	4	58	2	64	0	308.5	19	275.3	9.5	303.8	0
2020	35	69	Hardin	2	Southern	Completely Rural	100	4466	4	0	24	2	26	0	89.6	0	537.4	44.8	582.2	0
2020	36	71	Henderson	9	Central	Mostly Rural	99.7	7725	43	1	26	1	29	1	556.6	12.9	336.6	12.9	375.4	12.9
2020	37	73	Henry	14	Central	Mostly Rural	50.3	58983	494	8	149	14	171	0	837.5	13.6	252.6	23.7	289.9	0
2020	38	75	Iroquois	21	Central	Mostly Rural	71.7	32467	49	2	166	17	185	0	150.9	6.2	511.3	52.4	569.8	0
2020	39	77	Jackson	1	Southern	Mostly Urban	37.2	67221	47	25	321	85	450	19	69.9	37.2	477.5	126.4	669.4	28.3
2020	40	79	Jasper	4	Southern	Mostly Rural	69.9	11604	1	30	72	42	152	8	8.6	258.5	620.5	361.9	1309.9	68.9
2020	41	81	Jefferson	2	Southern	Mostly Rural	58.8	45482	77	11	334	22	383	16	169.3	24.2	734.4	48.4	842.1	35.2
2020	42	83	Jersey	7	Southern	Mostly Rural	60.6	25982	201	9	114	15	140	2	773.6	34.6	438.8	57.7	538.8	7.7
2020	43	85	Jo Daviess	15	Northern - Other	Mostly Rural	72.6	25176	42	25	37	49	112	1	166.8	99.3	147	194.6	444.9	4
2020	44	87	Johnson	1	Southern	Completely Rural	100	14630	57	6	53	44	106	3	389.6	41	362.3	300.8	724.5	20.5
2020	45	89	Kane	16	Northern - Collar	Mostly Urban	3.6	661662	1064	136	1421	395	1959	7	160.8	20.6	214.8	59.7	296.1	1.1
2020	46	91	Kankakee	21	Central	Mostly Urban	24.5	132887	89	0	412	98	510	0	67	0	310	73.7	383.8	0
2020	47	93	Kendall	23	Northern - Other	Mostly Urban	10.4	166905	558	1	265	130	397	1	334.3	0.6	158.8	77.9	237.9	0.6
2020	48	95	Knox	9	Central	Mostly Urban	24.3	58818	98	5	271	25	309	8	166.6	8.5	460.7	42.5	525.3	13.6
2020	49	97	Lake	19	Northern - Collar	Mostly Urban	1.3	857277	615	218	1127	371	1810	94	71.7	25.4	131.5	43.3	211.1	11
2020	50	99	LaSalle	13	Northern - Other	Mostly Urban	30.2	130239	162	8	392	3	372	-31	124.4	6.1	301	2.3	285.6	-23.8
2020	51	101	Lawrence	2	Southern	Mostly Rural	58	18363	122	5	94	2	102	1	664.4	27.2	511.9	10.9	555.5	5.4
2020	52	103	Lee	15	Northern - Other	Mostly Rural	53.2	40247	342	16	166	43	262	37	849.8	39.8	412.5	106.8	651	91.9
2020	53	105	Livingston	11	Central	Mostly Urban	40.8	43059	751	10	164	22	198	2	1744.1	23.2	380.9	51.1	459.8	4.6
2020	54	107	Logan	11	Central	Mostly Urban	39.9	33791	496	10	134	47	191	0	1467.8	29.6	396.6	139.1	565.2	0
2020	55	109	McDonough	9	Central	Mostly Urban	29.5	34265	36	0	71	12	84	1	105.1	0	207.2	35	245.1	2.9
2020	56	111	McHenry	22	Northern - Collar	Mostly Urban	9.9	375859	282	58	548	112	745	27	75	15.4	145.8	29.8	198.2	7.2
2020	57	113	McLean	11	Central	Mostly Urban	16.5	207475	318	9	835	76	927	7	153.3	4.3	402.5	36.6	446.8	3.4
2020	58	115	Macon	6	Central	Mostly Urban	15.3	125880	423	20	1004	173	1197	0	336	15.9	797.6	137.4	950.9	0
2020	59	117	Macoupin	7	Central	Mostly Rural	58.5	53870	156	40	262	82	393	9	289.6	74.3	486.4	152.2	729.5	16.7
2020	60	119	Madison	3	Southern	Mostly Urban	13.3	319345	815	47	1382	176	1605	0	255.2	14.7	432.8	55.1	502.6	0
2020	61	121	Marion	4	Southern	Mostly Urban	45.1	45667	184	84	358	69	545	34	402.9	183.9	783.9	151.1	1193.4	74.5
2020	62	123	Marshall	10	Central	Completely Rural	100	13616	32	6	36	9	53	2	235	44.1	264.4	66.1	389.2	14.7
2020	63	125	Mason	8	Central	Mostly Rural	77.5	15880	33	30	53	36	121	2	207.8	188.9	333.8	226.7	762	12.6
2020	64	127	Massac	1	Southern	Mostly Rural	50.5	16569	294	10	153	34	203	6	1774.4	60.4	923.4	205.2	1225.2	36.2
2020	65	129	Menard	8	Central	Mostly Rural	75.7	14691	58	4	16	11	32	1	394.8	27.2	108.9	74.9	217.8	6.8
2020	66	131	Mercer	14	Central	Mostly Rural	77.8	18419	29	0	54	12	66	0	157.4	0	293.2	65.2	358.3	0
2020	67	133	Monroe	20	Southern	Mostly Urban	41.4	42379	155	0	198	4	203	1	365.7	0	467.2	9.4	479	2.4
2020	68	135	Montgomery	4	Central	Mostly Urban	41.6	33679	297	20	135	71	226	0	881.9	59.4	400.8	210.8	671	0
2020	69	137	Morgan	7	Central	Mostly Urban	36.2	39601	131	52	192	112	379	23	330.8	131.3	484.8	282.8	957	58.1
2020	70	139	Moultrie	6	Central	Mostly Rural	69.2	17921	82	27	70	37	163	29	457.6	150.7	390.6	206.5	909.5	161.8
2020	71	141	Ogle	15	Northern - Other	Mostly Urban	47.1	61522	363	23	136	55	214	0	590	37.4	221.1	89.4	347.8	0
2020	72	143	Peoria	10	Central	Mostly Urban	14.6	219705	1679	80	873	350	1309	6	764.2	36.4	397.4	159.3	595.8	2.7
2020	73	145	Perry	20	Southern	Mostly Urban	43.6	24643	90	1	147	7	155	0	365.2	4.1	596.5	28.4	629	0
2020	74	147	Piatt	6	Central	Mostly Rural	67.7	19953	53	6	37	86	130	1	265.6	30.1	185.4	431	651.5	5
2020	75	149	Pike	8	Central	Mostly Rural	72.3	18643	118	33	168	58	292	33	632.9	177	901.1	311.1	1566.3	177
2020	76	151	Pope	1	Southern	Completely Rural	100	4598	15	9	27	7	43	0	326.2	195.7	587.2	152.2	935.2	0
2020	77	153	Pulaski	1	Southern	Completely Rural	100	6302	12	3	25	3	32	1	190.4	47.6	396.7	47.6	507.8	15.9
2020	78	155	Putnam	10	Central	Completely Rural	100	6835	15	2	12	5	23	4	219.5	29.3	175.6	73.2	336.5	58.5
2020	79	157	Randolph	20	Southern	Mostly Urban	42.6	37301	130	0	156	8	164	0	348.5	0	418.2	21.4	439.7	0
2020	80	159	Richland	2	Southern	Mostly Urban	43.5	19031	5	14	128	48	191	1	26.3	73.6	672.6	252.2	1003.6	5.3
2020	81	161	Rock Island	14	Central	Mostly Urban	10.9	172277	812	340	700	243	1307	24	471.3	197.4	406.3	141.1	758.7	13.9
2020	82	163	St. Clair	20	Southern	Mostly Urban	9.8	317825	575	10	1680	135	1831	6	180.9	3.1	528.6	42.5	576.1	1.9
2020	83	165	Saline	1	Southern	Mostly Urban	43.7	28107	123	24	270	81	396	21	437.6	85.4	960.6	288.2	1408.9	74.7
2020	84	167	Sangamon	7	Central	Mostly Urban	14.1	236526	969	39	721	203	966	3	409.7	16.5	304.8	85.8	408.4	1.3
2020	85	169	Schuyler	8	Central	Mostly Rural	57.6	7918	44	23	37	10	74	4	555.7	290.5	467.3	126.3	934.6	50.5
2020	86	171	Scott	7	Central	Completely Rural	100	6005	5	0	38	27	65	0	83.3	0	632.8	449.6	1082.4	0
2020	87	173	Shelby	4	Central	Mostly Rural	77.7	25817	113	11	78	25	118	4	437.7	42.6	302.1	96.8	457.1	15.5
2020	88	175	Stark	10	Central	Completely Rural	100	6391	36	1	16	2	19	0	563.3	15.6	250.4	31.3	297.3	0
2020	89	177	Stephenson	15	Northern - Other	Mostly Urban	40.1	53101	944	26	286	69	386	5	1777.7	49	538.6	129.9	726.9	9.4
2020	90	179	Tazewell	10	Central	Mostly Urban	20.4	159952	913	70	405	146	634	13	570.8	43.8	253.2	91.3	396.4	8.1
2020	91	181	Union	1	Southern	Mostly Rural	65.9	19981	55	19	116	33	183	15	275.3	95.1	580.6	165.2	915.9	75.1
2020	92	183	Vermilion	5	Central	Mostly Urban	31.3	92298	239	50	440	168	663	5	258.9	54.2	476.7	182	718.3	5.4
2020	93	185	Wabash	2	Southern	Mostly Urban	38.9	13654	25	6	107	32	145	0	183.1	43.9	783.7	234.4	1062	0
2020	94	187	Warren	9	Central	Mostly Urban	45.5	20263	31	1	57	6	64	0	153	4.9	281.3	29.6	315.8	0
2020	95	189	Washington	20	Southern	Mostly Rural	73.6	16659	89	1	46	4	56	5	534.2	6	276.1	24	336.2	30
2020	96	191	Wayne	2	Southern	Mostly Rural	69.9	19638	46	13	82	36	132	1	234.2	66.2	417.6	183.3	672.2	5.1
2020	97	193	White	2	Southern	Mostly Rural	62	16265	25	2	116	29	155	8	153.7	12.3	713.2	178.3	953	49.2
2020	98	195	Whiteside	14	Northern - Other	Mostly Urban	37.3	66527	349	86	274	55	434	19	524.6	129.3	411.9	82.7	652.4	28.6
2020	99	197	Will	12	Northern - Collar	Mostly Urban	3.9	854795	390	21	1058	190	1277	8	45.6	2.5	123.8	22.2	149.4	0.9
2020	100	199	Williamson	1	Southern	Mostly Urban	34.8	80720	126	72	317	76	530	65	156.1	89.2	392.7	94.2	656.6	80.5
2020	101	201	Winnebago	17	Northern - Other	Mostly Urban	7.9	346661	3572	83	1800	314	2204	7	1030.4	23.9	519.2	90.6	635.8	2
2020	102	203	Woodford	11	Central	Mostly Rural	54.9	47195	631	48	157	63	277	9	1337	101.7	332.7	133.5	586.9	19.1

`
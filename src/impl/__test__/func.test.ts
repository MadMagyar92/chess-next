import { IDataService, IGame, IUnit } from "../../schema";
import { GameServiceImpl } from "../data/game";
import { UnitServiceImpl } from "../data/unit";
import { MoveServiceImpl } from "../runtime/move";
// import { AttacServiceImpl } from "../runtime/attack";

const gameId = 1;
const gameService: GameServiceImpl = new GameServiceImpl([]);
const game: IGame = gameService.get(gameId);

const unitService: UnitServiceImpl = new UnitServiceImpl([]);
const unit: IUnit = unitService.get(gameId, 0, 0);

const moveService: MoveServiceImpl = new MoveServiceImpl();
const move: IMove = moveService.get(gameId, unit, { x: 0, y: 0});

const attackService: AttackServiceImpl = new AttackServiceImpl();
const attack: IAttack = attackService.get(gameId, unit, 0, 0);
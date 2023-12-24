import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const {
        data: games,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage,
    } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (error) return <Text>{error.message}</Text>;

    const fetchGameCount =
        games?.pages.reduce((total, page) => total + page.results.length, 0) ??
        0;

    return (
        <InfiniteScroll
            dataLength={fetchGameCount}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner />}
        >
            <SimpleGrid
                padding="14px"
                columns={{
                    sm: 1,
                    md: 3,
                    lg: 3,
                    xl: 4,
                }}
                spacing={6}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {!isLoading &&
                    games?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.results.map((game) => (
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game} />
                                </GameCardContainer>
                            ))}
                        </React.Fragment>
                    ))}
            </SimpleGrid>
        </InfiniteScroll>
    );
};

export default GameGrid;

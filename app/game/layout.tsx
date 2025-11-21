"use server";

import Container from "../components/Container";
import GameProvider from "../providers/GameProvider";
import { Question as QuestionModel } from "../models/question.model";
import { getQuestions } from "./get-questions.action";

async function fetchQuestions(): Promise<QuestionModel[]> {
  const questions = await getQuestions();
  return questions;
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const questions = await fetchQuestions();

  return (
    <Container>
      <GameProvider questions={questions}>{children}</GameProvider>
    </Container>
  );
}

